import { useCallback, useEffect, useState } from 'react';

/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Hooks */
import { useDropzone } from 'react-dropzone';

import { useUI } from '../../../hooks';
import { useAuth } from '../../Users/hooks';

import { usePubContext } from './usePubContext';
import { useCreatePub, useUpdatePub } from './publications';

interface IFile {
  file?: File;
  preview: string;
}

interface IProps {
  action: 'create' | 'update';
  initialValues: { image: string; description: string };
  preview?: string;
  onClose: () => void;
}

const accept = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpge'],
  'image/jpg': ['.jpg'],
  'image/webp': ['.webp'],
};

export const useHandlePost = (props: IProps) => {
  const { action, initialValues, preview, onClose } = props;

  /* Context */
  const { data } = useUI();

  const { auth } = useAuth();
  const { create } = data.posts;

  const { selectedPublication: pub, closePublicationModal } = usePubContext();

  /* States */
  const [fileUpload, setFileUpload] = useState<IFile | undefined>(
    preview ? { preview } : undefined
  );

  /* Mutation */
  const createPubMutation = useCreatePub();
  const updatePubMutation = useUpdatePub(pub.code);

  /* Forms */
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      description: Yup.string().max(100, create.validations.desc),
    }),
    onSubmit: async (formValues) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let payload: any = formValues;

      if (action === 'create' && !formValues.image) {
        formik.setErrors({ image: create.validations.img });
        return;
      }

      if (typeof formValues.image === 'string') {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { image: _, ...data } = formValues;
        payload = data;
      }

      if (action === 'create')
        createPubMutation.mutate({ ...payload, user: auth!.user_id });
      else updatePubMutation.mutate({ ...payload });
    },
  });

  /* Dropzone */
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      formik.setFieldValue('image', file);

      setFileUpload({
        file,
        preview: URL.createObjectURL(file),
      });
    },
    [formik]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  useEffect(() => {
    if (fileUpload?.preview) formik.setErrors({ image: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUpload]);

  const isPending = createPubMutation.isPending || updatePubMutation.isPending;

  if (createPubMutation.isSuccess || createPubMutation.isError) {
    onClose();
  }

  if (updatePubMutation.isSuccess || updatePubMutation.isError) {
    closePublicationModal();
  }

  return { formik, fileUpload, isPending, getRootProps, getInputProps };
};
