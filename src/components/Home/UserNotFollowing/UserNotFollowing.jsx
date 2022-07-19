import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import { useQuery } from '@apollo/client';
import { GET_NOT_FOLLOWERS } from '../../../gql/follow';
import ImageNotFound from '../../../assets/avatar.png';
import './UserNotFollowing.scss';

function UserNotFollowing() {
  const { data, loading } = useQuery(GET_NOT_FOLLOWERS);

  if (loading) return null;

  const { getNotFollowers } = data;

  return (
    <div className="users-not-following">
      <h3>Sugerencias para ti</h3>
      {map(getNotFollowers, (user, index) => (
        <Link
          to={`/${user.username}`}
          key={index}
          className="users-not-following__user"
        >
          <Image
            src={user.avatar}
            onError={(e) => {
              e.target.src = ImageNotFound;
            }}
            avatar
          />

          <span>{user.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default UserNotFollowing;
