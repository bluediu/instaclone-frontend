import { useState } from 'react';

import './Profile.scss';
import { Grid, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import ImageNotFound from '../../assets/avatar.png';
import ModalBasic from '../Modal/ModalBasic';
import UserNotFound from '../UserNotFound';

function Profile({ username }) {
  const [showModal, setShowModal] = useState();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  if (loading) return null;

  if (error) return <UserNotFound />;

  const { getUser } = data;

  return (
    <>
      <Grid className="profile">
        <Grid.Column width={5} className="profile__left">
          <Image
            src={ImageNotFound}
            avatar
            onClick={() => setShowModal(true)}
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
        title="Subir avatar"
      >
        <p>Opciones</p>
        <p>Opciones</p>
        <p>Opciones</p>
      </ModalBasic>
    </>
  );
}

export default Profile;
