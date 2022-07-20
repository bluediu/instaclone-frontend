import { useState } from 'react';

/* Components */
import { Container, Image } from 'semantic-ui-react';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import RegisterForm from '../../components/Auth/RegisterForm';

import instaclone from '../../assets/instaclone.png';
import './Auth.scss';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className="auth">
      <Image src={instaclone} />

      <section className="container-form">
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </section>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              ¿No tiene cuenta?
              <span onClick={() => setShowLogin(!showLogin)}>
                Regístrate
              </span>
            </>
          ) : (
            <>
              Entra con tu cuenta
              <span onClick={() => setShowLogin(!showLogin)}>
                Iniciar sección
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
};

export default Auth;
