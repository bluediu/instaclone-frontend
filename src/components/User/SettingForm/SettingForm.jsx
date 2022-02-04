import React from 'react';
import './SettingForm.scss';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import useAuth from '../../../hooks/useAuth';
import PasswordForm from '../PasswordForm';
import EmailForm from '../EmailForm/EmailForm';
import DescriptionForm from '../DescriptionForm/DescriptionForm';
import WebSiteForm from '../WebSiteForm';

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

  const onChangeDescription = () => {
    setTitleModal('Actualiza tu descripción');
    setClidrenModal(
      <DescriptionForm
        setShowModal={setShowModal}
        currentDesc={getUser.description}
        refetch={refetch}
      />
    );
  };

  const onChangeWebSite = () => {
    setTitleModal('Actualiza tu sitio web');
    setClidrenModal(
      <WebSiteForm
        setShowModal={setShowModal}
        currentWebSite={getUser.webSite}
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
      <Button onClick={onChangeDescription}>Descripción</Button>
      <Button onClick={onChangeWebSite}>Sitio web</Button>
      <Button onClick={onLogout}>Cerrar sección</Button>
      <Button onClick={() => setShowModal(false)}>
        Cancelar
      </Button>
    </div>
  );
}

export default SettingForm;
