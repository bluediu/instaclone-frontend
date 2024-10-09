/* Components */
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Image, Popup } from 'semantic-ui-react';
import { ModalUpload } from '../../../../Posts/components/Publication';

/* Constants */
import { usersPath } from '../../../../Users/constants';

/* Hooks */
import { useBasicModal, useUI } from '../../../../../hooks';
import { useAuth, useUser } from '../../../../Users/hooks';

/* Utils */
import { generateUrl } from '../../../../../utils';

/* Types */
import { TranslationType } from '../../../../../types';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

import './RightHeader.scss';

export const RightHeader = () => {
  /* Context */
  const { auth, logout } = useAuth();
  const { changeLang, data, lang } = useUI();

  /* States */
  const { show, showModal, closeModal } = useBasicModal();

  /* Data */
  const { headerOpts } = data as TranslationType;

  const username = auth!.username;
  const query = useUser(username);

  if (query.isLoading)
    return (
      <section className="text-center">
        <Icon loading name="spinner" />
      </section>
    );

  return (
    <>
      <article className="right-header">
        <Popup
          content={headerOpts.popup.home}
          trigger={
            <Link to={usersPath.HOME}>
              <Icon name="home" />
            </Link>
          }
          position="top center"
          size="tiny"
        />

        <Popup
          content={headerOpts.popup.create}
          trigger={<Icon name="plus square outline" onClick={showModal} />}
          position="top center"
          size="tiny"
        />

        <Link to={generateUrl(usersPath.PROFILE, { username })}>
          <Image loading="lazy" src={query.data?.avatar || NO_IMAGE} avatar />
        </Link>

        <Dropdown icon="bars" floating className="icon">
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to={generateUrl(usersPath.PROFILE, { username })}
            >
              {headerOpts.profile}
            </Dropdown.Item>
            <Dropdown
              text={headerOpts.lang.title}
              pointing="right"
              className="link item"
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  selected={lang === 'es'}
                  onClick={() => changeLang('es')}
                >
                  {headerOpts.lang.es}
                </Dropdown.Item>
                <Dropdown.Item
                  selected={lang === 'en'}
                  onClick={() => changeLang('en')}
                >
                  {headerOpts.lang.en}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>{headerOpts.logout}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </article>

      <ModalUpload action="create" show={show} onClose={closeModal} />
    </>
  );
};
