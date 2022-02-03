import React, { useCallback, useState } from 'react';
import {
  Modal,
  Icon,
  Button,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { PUBLISH } from '../../../gql/publication';
import { toast } from 'react-toastify';
import './ModalUpload.scss';

function ModalUpload({ show, setShow }) {
  const [fileUpload, setFileUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Apollo
  const [publish] = useMutation(PUBLISH);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];

    setFileUpload({
      type: 'image',
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/png, image/jpeg, image/jpg',
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const onClose = () => {
    setFileUpload(null);
    setIsLoading(false);
    setShow(false);
  };

  const onPublish = async () => {
    try {
      setIsLoading(true);
      const { data } = await publish({
        variables: {
          file: fileUpload.file,
        },
      });

      console.log(data);
      if (!data.publish.status) {
        toast.warning('Error al publicar');
        isLoading(false);
      } else {
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      size="small"
      open={show}
      onClose={onClose}
      className="modal-upload"
    >
      <div
        {...getRootProps()}
        className="dropzone"
        style={fileUpload && { border: 0 }}
      >
        {!fileUpload && (
          <>
            <Icon name="cloud upload" />
            <p>Arrastrar tu foto que quieras publicar</p>
          </>
        )}

        <input {...getInputProps()} />
      </div>

      {fileUpload?.type === 'image' && (
        <div
          className="image"
          style={{
            backgroundImage: `url("${fileUpload.preview}")`,
          }}
        />
      )}

      {fileUpload && (
        <Button
          className="btn-upload btn-action"
          onClick={onPublish}
        >
          Publicar
        </Button>
      )}

      {isLoading && (
        <Dimmer active className="publishing">
          <Loader />
          <p>publicando...</p>
        </Dimmer>
      )}
    </Modal>
  );
}

export default ModalUpload;
