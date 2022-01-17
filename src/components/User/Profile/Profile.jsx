import './Profile.scss';

import { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';
import ImageNotFound from '../../../assets/avatar.png';
import ModalBasic from '../../Modal/ModalBasic';
import UserNotFound from '../../UserNotFound';
import AvatarForm from '../AvatarForm';

function Profile({ username }) {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [clidrenModal, setClidrenModal] = useState(null);
  const { auth } = useAuth();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  if (loading) return null;

  if (error) return <UserNotFound />;

  /* Query name */
  const { getUser } = data;

  const handleModal = (type) => {
    switch (type) {
      case 'avatar':
        setTitleModal('Cambiar foto del perfil');
        setClidrenModal(
          <AvatarForm setShowModal={setShowModal} auth={auth} />
        );
        setShowModal(true);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Grid className="profile">
        <Grid.Column width={5} className="profile__left">
          <Image
            src={
              getUser.avatar
                ? `${process.env.REACT_APP_IMAGEURL}${getUser.avatar}`
                : ImageNotFound
            }
            avatar
            onClick={() =>
              username === auth.username && handleModal('avatar')
            }
          />
        </Grid.Column>
        <Grid.Column width={11} className="profile__right">
          <div>Header</div>
          <div>Followers</div>
          <div className="other">
            <p className="name">{getUser.name}</p>
            {getUser.webSite && (
              <a
                href={getUser.webSite}
                className="webSite"
                target="_blank"
                rel="noreferrer"
              >
                {getUser.webSite}
              </a>
            )}
            {getUser.description && (
              <p className="description">
                {getUser.description}
              </p>
            )}
          </div>
        </Grid.Column>
      </Grid>

      <ModalBasic
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
      >
        {clidrenModal}
      </ModalBasic>
    </>
  );
}

export default Profile;
