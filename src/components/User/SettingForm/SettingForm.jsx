import React from 'react';
import './SettingForm.scss';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import useAuth from '../../../hooks/useAuth';
import PasswordForm from '../PasswordForm';
import EmailForm from '../EmailForm/EmailForm';

function SettingForm({
  setShowModal,
  setTitleModal,
  setClidrenModal,
  getUser,
  refetch,
}) {
  const { logout } = useAuth();
  const history = useHistory();
  const client = useApolloClient();

  const onChangePassword = () => {
    setTitleModal('Cambia tú contraseña');
    setClidrenModal(<PasswordForm logout={onLogout} />);
  };

  const onChangeEmail = () => {
    setTitleModal('Cambia tú email');
    setClidrenModal(
      <EmailForm
        setShowModal={setShowModal}
        currentEmail={getUser.email}
        refetch={refetch}
      />
    );
  };

  const onLogout = () => {
    client.clearStore();
    logout();
    history.push('/');
  };

  return (
    <div className="setting-form">
      <Button onClick={onChangePassword}>
        Cambiar contraseña
      </Button>
      <Button onClick={onChangeEmail}>Cambiar email</Button>
      <Button>Descripción</Button>
      <Button>Sitio web</Button>
      <Button onClick={onLogout}>Cerrar sección</Button>
      <Button onClick={() => setShowModal(false)}>
        Cancelar
      </Button>
    </div>
  );
}

export default SettingForm;
