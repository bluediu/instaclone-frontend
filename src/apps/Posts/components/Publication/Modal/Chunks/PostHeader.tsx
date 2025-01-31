/* Components */
import { Link } from 'react-router-dom';
import { Icon, Image } from 'semantic-ui-react';

import { ModalBasic } from '@/shared';

import { ModalUpload } from '../../ModalUpload';

import { HeaderOptions } from './HeaderOptions';

/* Hooks */

import { useAuth } from '@/apps//Users/hooks';

import { useBasicModal, useModal } from '@/hooks';

import { usePubContext } from '@/apps/Posts/hooks';

/* Utils */
import { generateUrl } from '@/utils';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

interface IProps {
  showCloseButton?: boolean;
}

export const PostHeader = ({ showCloseButton = true }: IProps) => {
  const { auth } = useAuth();

  const { selectedPublication: pub, closePublicationModal } = usePubContext();
  const { user } = pub;

  /* === Modal windows === */

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal
  } = useModal();

  const {
    show,
    showModal: showEditModal,
    closeModal: closeEditModal,
  } = useBasicModal();

  const openOptions = () => {
    openModal(
      '',
      <HeaderOptions
        pub={pub}
        closeModal={closeModal}
        showEditModal={showEditModal}
      />
    );
  };

  return (
    <>
      <section>
        {showCloseButton && (
          <Icon
            name="angle left"
            size="large"
            className="text-secondary cursor-pointer"
            onClick={closePublicationModal}
          />
        )}

        <Link to={generateUrl(usersPath.PROFILE, { username: user.username })}>
          <Image size="mini" src={user.avatar || NO_IMAGE} avatar />
        </Link>
        <b className="ml-2">{user.username}</b>
      </section>

      <section className="cursor-pointer">
        {user.username === auth?.username && (
          <Icon
            name="ellipsis horizontal"
            size="large"
            style={{ opacity: '0.7' }}
            onClick={openOptions}
          />
        )}

        <ModalBasic
          show={showModal}
          onClose={closeModal}
          title={modalTitle}
          padding={false}
          size="mini"
          children={modalContent ?? <span>No content</span>}
        />
        <ModalUpload
          action="update"
          show={show}
          onClose={closeEditModal}
          preview={pub.image}
          desc={pub.description}
        />
      </section>
    </>
  );
};
