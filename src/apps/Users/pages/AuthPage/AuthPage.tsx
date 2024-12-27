/* Components */
import { Container, Dropdown, Image } from 'semantic-ui-react';
import { LoginForm, SignUp } from '../../components/Auth';

/* Hooks */
import { useUI } from '@/hooks';

import { useAuth } from '@/apps/Users/hooks';

/* Types */
import { TLang } from '@/types';

/* Statics */
import LOGO from '/img/instaclone.png';

import './AuthPage.scss';

export const AuthPage = () => {
  // Context
  const { data, lang, changeLang } = useUI();
  const { switchAuthPage, handleAuthPage } = useAuth();

  const { auth, headerOpts } = data;

  const languageOptions = [
    { key: 'en', text: `${headerOpts.lang.en}`, value: 'en' },
    { key: 'es', text: `${headerOpts.lang.es}`, value: 'es' },
  ];

  const defaultValue =
    lang === 'en' ? languageOptions[0].value : languageOptions[1].value;

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
