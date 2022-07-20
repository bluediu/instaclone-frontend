/* hooks */
import React from 'react';
import { size, map } from 'lodash';
import { useHistory } from 'react-router-dom';

/* Components */
import { Image } from 'semantic-ui-react';

import ImageNotFound from '../../../assets/avatar.png';
import './ListUsers.scss';

function ListUsers({ users, setShowModal }) {
  const history = useHistory();

  const goToUser = (username) => {
    setShowModal(false);
    history.push(`/${username}`);
  };

  return (
    <div className="list-users">
      {size(users) === 0 ? (
        <p className="list-users__not-users">
          No se han encontrado usuarios
        </p>
      ) : (
        map(users, (user, index) => (
          <div
            key={index}
            className="list-users__users"
            onClick={() => goToUser(user.username)}
          >
            <Image
              src={
                `${process.env.REACT_APP_IMAGEURL}${user.avatar}` ||
                ImageNotFound
              }
              avatar
            />
            <div>
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ListUsers;
