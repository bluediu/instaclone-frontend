import React from 'react';
import './SettingForm.scss';
import { Button } from 'semantic-ui-react';

function SettingForm({ setShowModal }) {
  return (
    <div className="setting-form">
      <Button>Cambiar contraseña</Button>
      <Button>Cambiar email</Button>
      <Button>Descripción</Button>
      <Button>Sitio web</Button>
      <Button>Cerrar sección</Button>
      <Button onClick={() => setShowModal(false)}>
        Cancelar
      </Button>
    </div>
  );
}

export default SettingForm;
