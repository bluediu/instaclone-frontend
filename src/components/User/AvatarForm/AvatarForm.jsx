import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

function AvatarForm({ setShowModal }) {
  const onDrop = useCallback((aceptedFiles) => {
    console.log(aceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/png, image/jpeg',
    noKeyboard: true,
    multiple: true,
    onDrop,
  });

  return (
    <div className="avatar-form">
      <Button {...getRootProps()}>Cargar una foto</Button>
      <Button>Eliminar foto actual</Button>
      <Button onClick={() => setShowModal(false)}>
        Cancelar
      </Button>
      <input {...getInputProps()} />
    </div>
  );
}

export default AvatarForm;
