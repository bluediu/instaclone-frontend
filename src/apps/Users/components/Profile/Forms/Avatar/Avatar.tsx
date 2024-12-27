import { useCallback, useEffect } from 'react';

/* Components */
import { Button, Icon } from 'semantic-ui-react';

/* Hooks */
import { useDropzone } from 'react-dropzone';

import { useUploadAvatar, useRemoveAvatar } from '@/apps/Users/hooks';

/* Types */
import { TranslationType } from '@/types';

import './Avatar.scss';

interface IProps {
  username: string;
  onClose: () => void;
  lang: TranslationType;
}

export const Avatar = (props: IProps) => {
  const { username, onClose, lang } = props;

  const uploadMutation = useUploadAvatar(username);
  const removeMutation = useRemoveAvatar(username);

  useEffect(() => {
    if (uploadMutation.isSuccess) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadMutation]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file: File = acceptedFiles[0];
      uploadMutation.mutate({ avatar: file });
    },
    [uploadMutation]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpge'],
      'image/jpg': ['.jpg'],
      'image/webp': ['.webp'],
    },
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const onRemove = () => removeMutation.mutate();

  if (removeMutation.isSuccess || removeMutation.isError) onClose();

  const isPending = uploadMutation.isPending || removeMutation.isPending;

  return (
    <>
      {isPending && (
        <section className="text-center">
          <Icon loading name="spinner" /> Processing...
        </section>
      )}

      <article className="avatar-form">
        <Button
          disabled={uploadMutation.isPending}
          {...getRootProps()}
          color={undefined}
        >
          {lang.profile.avatarOpts.upload}
        </Button>
        <Button disabled={isPending} onClick={onRemove}>
          {lang.profile.avatarOpts.remove}
        </Button>
        <Button disabled={isPending} onClick={onClose}>
          {lang.profile.avatarOpts.cancel}
        </Button>
        <input {...getInputProps()} />
      </article>
    </>
  );
};
