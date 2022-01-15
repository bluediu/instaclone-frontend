import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR, GET_USER } from '../../../gql/user';
import { toast } from 'react-toastify';

function AvatarForm({ setShowModal, auth }) {
  const [updateAvatar] = useMutation(UPDATE_AVATAR, {
    update(cache, { data: { updateAvatar } }) {
      /* 
      Read the query that has been previously consumed in Profile compornent saved in Cache
      */
      const { getUser } = cache.readQuery({
        query: GET_USER,
        variables: {
          username: auth.username,
        },
      });

      /* 
      Then, update the specific property that has been update by updateAvatar query, and taked the previous state and updated the prop 
      */
      cache.writeQuery({
        query: GET_USER,
        variables: {
          username: auth.username,
        },
        data: {
          ...getUser,
          avatar: updateAvatar.urlAvatar,
        },
      });
    },
  });

  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (aceptedFile) => {
      const file = aceptedFile[0];

      try {
        setLoading(true);
        const res = await updateAvatar({ variables: { file } });

        const { data } = res;

        console.log(data);

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
