import React, { useCallback, useState } from 'react';
import {
  Modal,
  Icon,
  Button,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import './ModalUpload.scss';

function ModalUpload({ show, setShow }) {
  const [fileUpload, setFileUpload] = useState(null);

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
    setShow(false);
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
    </Modal>
  );
}

export default ModalUpload;
