/* Components */
import { Container, Dropdown, Image } from 'semantic-ui-react';
import { LoginForm, SignUp } from '../../components/Auth';

/* Hooks */
import { useAuth } from '../../hooks';
import { useUI } from '../../../../hooks';

/* Types */
import { TLang } from '../../../../types';

/* Constants */
import { LANG } from '../../../../constants';

/* Statics */
import LOGO from '/img/instaclone.png';

import './AuthPage.scss';

const languageOptions = [
  { key: 'en', text: 'English', value: 'en' },
  { key: 'es', text: 'Spanish', value: 'es' },
];

export const AuthPage = () => {
  const { data, changeLang } = useUI();

  const { auth } = data;

  const { switchAuthPage, handleAuthPage } = useAuth();

  const defaultValue =
    localStorage.getItem(LANG) === 'en'
      ? languageOptions[0].value
      : languageOptions[1].value;

  return (
    <Container fluid className="auth">
      <Image src={LOGO} alt="Logo" />
      <section className="container-form">
        {switchAuthPage ? <LoginForm /> : <SignUp />}
      </section>

      <section className="change-form">
        <p>
          {switchAuthPage ? (
            <>
              {auth.noAccount.title}
              <span onClick={handleAuthPage}>{auth.noAccount.btn}</span>
            </>
          ) : (
            <>
              {auth.signInAccount.title}

              <span onClick={handleAuthPage}>{auth.signInAccount.btn}</span>
            </>
          )}
        </p>
      </section>

      <Dropdown
        button
        className="icon translation"
        floating
        labeled
        icon="world"
        options={languageOptions}
        onChange={(_, data) => changeLang(data.value as TLang)}
        defaultValue={defaultValue}
      />
    </Container>
  );
};
