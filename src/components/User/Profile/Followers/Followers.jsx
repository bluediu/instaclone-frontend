/* hooks & libs */
import React, { useEffect, useState } from 'react';
import { size } from 'lodash';

/* Components */
import ListUsers from '../../ListUsers';
import ModalBasic from '../../../Modal/ModalBasic';

/* GraphQL */
import { useQuery } from '@apollo/client';
import {
  GET_FOLLOWERS,
  GET_FOLLOWING,
} from '../../../../gql/follow';

import './Followers.scss';

function Followers({ username, totalPublications }) {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [childrenModal, setChildrenModal] = useState(null);

  /* GraphQL */
  const {
    data: dataFollowers,
    loading: loadingFollowers,
    startPolling: startPollingFollowers,
    stopPolling: stopPollingFollowers,
  } = useQuery(GET_FOLLOWERS, {
    variables: { username },
  });

  const {
    data: dataFollowing,
    loading: loadingFollowing,
    startPolling: startPollingFollowing,
    stopPolling: stopPollingFollowing,
  } = useQuery(GET_FOLLOWING, { variables: { username } });

  useEffect(() => {
    startPollingFollowers(1000);

    return () => stopPollingFollowers();
  }, [startPollingFollowers, stopPollingFollowers]);

  useEffect(() => {
    startPollingFollowing(1000);

    return () => startPollingFollowing();
  }, [startPollingFollowing, stopPollingFollowing]);

  if (loadingFollowers || loadingFollowing) return null;

  const { getFollowers } = dataFollowers;
  const { getFollowing } = dataFollowing;

  const openFollowers = () => {
    setTitleModal('Seguidores');
    setChildrenModal(
      <ListUsers
        users={getFollowers}
        setShowModal={setShowModal}
      />
    );
    setShowModal(true);
  };

  const openFollowing = () => {
    setTitleModal('Seguidos');
    setChildrenModal(
      <ListUsers
        users={getFollowing}
        setShowModal={setShowModal}
      />
    );
    setShowModal(true);
  };

  return (
    <>
      <div className="followers">
        <p>
          <span>{totalPublications}</span> publicaciones
        </p>
        <p className="link" onClick={openFollowers}>
          <span>{size(getFollowers)}</span> seguidores
        </p>
        <p className="link" onClick={openFollowing}>
          <span>{size(getFollowing)}</span> seguidos
        </p>
      </div>

      <ModalBasic
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
      >
        {childrenModal}
      </ModalBasic>
    </>
  );
}

export default Followers;
