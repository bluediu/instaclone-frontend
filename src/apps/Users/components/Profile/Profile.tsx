import { useState } from 'react';

/* Libs Components */
import { Grid, Image } from 'semantic-ui-react';

/* Components */
import { Extra } from './Extra';
import { Header } from './Header';
import { Avatar, Settings } from './Forms';
import { NoUserFound } from './NoUserFound';
import { ModalBasic } from '../../../../shared';
import { FeedLoader } from '../../../UI/components';

/* Hooks */
import { useAuth, useUser } from '../../hooks';
import { useModal, useUI } from '../../../../hooks';

/* Types */
import { TranslationType, TSize } from '../../../../types';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

import { Followers } from './Followers';

import './Profile.scss';

interface IProps {
  username: string;
  totalPubs?: number;
}

export const Profile = ({ username, totalPubs }: IProps) => {
  const { data: lang } = useUI();
  const { profile } = lang as TranslationType;

  const [size, setSize] = useState<TSize>('tiny');
  const [padding, setPadding] = useState(true);

  const { auth } = useAuth();
  const query = useUser(username);

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal 
  } = useModal();

  if (query.isLoading) {
    return (
      <section className="text-center mt-5">
        <FeedLoader />
      </section>
    );
  }

  if (query.isError) return <NoUserFound />;

  const { data } = query;

  const onChangeProfile = () => {
    setPadding(true);
    setSize('tiny');
    openModal(
      profile.settingAction,
      <Settings user={data!} onClose={closeModal} />
    );
  };

  const onChangeAvatar = () => {
    setPadding(false);
    openModal(
      profile.avatarAction,
      <Avatar
        username={username}
        onClose={closeModal}
        lang={lang as TranslationType}
      />
    );
    setSize('mini');
  };

  return (
    <>
      <Grid className="profile">
        {/* Avatar */}
        <Grid.Column computer={5} mobile={16} className="profile__left">
          <Image
            src={data!.avatar ? data!.avatar : NO_IMAGE}
            avatar
            onClick={onChangeAvatar}
          />
        </Grid.Column>

        {/* Info */}
        <Grid.Column computer={11} mobile={16} className="profile__right">
          <Header
            username={username}
            authUsername={auth!.username}
            onChangeProfile={onChangeProfile}
          />
          <Followers totalPubs={totalPubs!} />
          <Extra data={query.data!} />
        </Grid.Column>
      </Grid>

      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        padding={padding}
        size={size}
        children={modalContent ?? <span>No content</span>}
      />
    </>
  );
};
