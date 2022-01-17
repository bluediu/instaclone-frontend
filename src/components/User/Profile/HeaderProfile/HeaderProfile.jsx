import React from 'react';
import './HeaderProfile.scss';
import { Button } from 'semantic-ui-react';

function HeaderProfile({ username, auth, handleModal }) {
  return (
    <div className="header-profile">
      <h2>{username}</h2>

      {username === auth.username ? (
        <Button onClick={() => handleModal('settings')}>
          Ajustes
        </Button>
      ) : (
        <Button>Seguir</Button>
      )}
    </div>
  );
}

export default HeaderProfile;
