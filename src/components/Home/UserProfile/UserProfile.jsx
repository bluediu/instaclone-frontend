import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_PROFILE } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';
import { Image } from 'semantic-ui-react';

import './UserProfile.scss';

function UserProfile() {
  const { auth } = useAuth();
  const { data, loading } = useQuery(GET_PROFILE, {
    variables: { username: auth.username },
  });

  if (loading) return null;

  const { avatar, name, username } = data.getUser;

  return (
    <section className="user__profile">
      <div className="user__profile-info">
        <Image src={avatar} alt="profile" avatar />

        <div className="user__profile-info-name">
          <span>{name}</span>
          <span>{username}</span>
        </div>
      </div>

      <Link to={`/${username}`} className="user__profile-link">
        Ver
      </Link>
    </section>
  );
}

export default UserProfile;
