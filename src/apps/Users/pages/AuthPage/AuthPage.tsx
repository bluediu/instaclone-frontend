import { useState } from 'react';

/* Components */
import { Container, Dropdown, Image } from 'semantic-ui-react';
import { LoginForm, SignUp } from '../../components/Auth';

/* Hooks */
import { useUI } from '../../../../hooks';

/* Types */
import { TLang, TranslationType } from '../../../../types';

/* Statics */
import LOGO from '/img/instaclone.png';

/* Constants */
import { LANG } from '../../../../constants';

import './AuthPage.scss';

const languageOptions = [
  { key: 'en', text: 'English', value: 'en' },
  { key: 'es', text: 'Spanish', value: 'es' },
];

export const AuthPage = () => {
  const { data, changeLang } = useUI();

  const { auth } = data as TranslationType;

  const [showLogin, setShowLogin] = useState(true);

  const defaultValue =
    localStorage.getItem(LANG) === 'en'
      ? languageOptions[0].value
      : languageOptions[1].value;

  return (
    <Container fluid className="auth">
      <Image src={LOGO} alt="Logo" />
      <section className="container-form">
        {showLogin ? <LoginForm /> : <SignUp />}
      </section>

      <section className="change-form">
        <p>
          {showLogin ? (
            <>
              {auth.noAccount.title}
              <span onClick={() => setShowLogin(!showLogin)}>
                {auth.noAccount.btn}
              </span>
            </>
          ) : (
            <>
              {auth.signInAccount.title}

              <span onClick={() => setShowLogin(!showLogin)}>
                {auth.signInAccount.btn}
              </span>
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
