import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR } from '../../../gql/user';
import { toast } from 'react-toastify';

function AvatarForm({ setShowModal }) {
  const [updateAvatar] = useMutation(UPDATE_AVATAR);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (aceptedFile) => {
      const file = aceptedFile[0];

      try {
        setLoading(true);
        const res = await updateAvatar({ variables: { file } });

        const { data } = res;

        if (!data.updateAvatar.status) {
          toast.warning('Error al actualizar el avatar');
          setLoading(false);
        } else {
          setLoading(false);
          setShowModal(false);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [updateAvatar, setLoading, setShowModal]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/png, image/jpeg, image/jpg',
    noKeyboard: true,
    multiple: true,
    onDrop,
  });

  return (
    <div className="avatar-form">
      <Button loading={loading} {...getRootProps()}>
        Cargar una foto
      </Button>
      <Button>Eliminar foto actual</Button>
      <Button onClick={() => setShowModal(false)}>
        Cancelar
      </Button>
      <input {...getInputProps()} />
    </div>
  );
}

export default AvatarForm;
