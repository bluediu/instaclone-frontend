import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR } from '../../../gql/user';

function AvatarForm({ setShowModal }) {
  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const onDrop = useCallback(
    async (aceptedFile) => {
      const file = aceptedFile[0];

      try {
        const res = await updateAvatar({ variables: { file } });

        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    [updateAvatar]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/png, image/jpeg image/jpg',
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
