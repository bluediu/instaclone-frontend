import React, { useEffect, useState } from 'react';
import { Image } from 'semantic-ui-react';
import './Feed.scss';

import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import FeedLoader from './FeedLoader/FeedLoader';
import { GET_PUBLICATIONS_FOLLOWING } from '../../../gql/publication';
import ImageNotFound from '../../../assets/avatar.png';
import Actions from '../../Modal/ModalPublication/Actions/Actions';
import CommentForm from '../../Modal/ModalPublication/CommentForm/CommentForm';
import ModalPublication from '../../Modal/ModalPublication/ModalPublication';

function Feed() {
  const { data, loading, startPolling, stopPolling } = useQuery(
    GET_PUBLICATIONS_FOLLOWING
  );
  const [showModal, setShowModal] = useState(false);
  const [publicationSelect, setPublicationSelect] =
    useState(null);

  useEffect(() => {
    startPolling(5000);

    return () => stopPolling();
  }, [startPolling, stopPolling]);

  if (loading)
    return (
      <div className="publications-spinner">
        <FeedLoader />
        <span>Obtenido publicaciones...</span>
      </div>
    );

  const { getPublicationsFollowing } = data;

  const openPublication = (publication) => {
    setPublicationSelect(publication);
    setShowModal(true);
  };

  return (
    <>
      <div className="feed">
        {map(getPublicationsFollowing, (publication, index) => (
          <div key={index} className="feed__box">
            <Link to={`/${publication.idUser.username}`}>
              <div className="feed__box-user">
                <Image
                  src={`${process.env.REACT_APP_IMAGEURL}${publication.idUser.avatar}`}
                  onError={(e) => {
                    e.target.src = ImageNotFound;
                  }}
                  avatar
                />
                <span>{publication.idUser.name}</span>
              </div>
            </Link>
            <div
              className="feed__box-photo"
              style={{
                backgroundImage: `url("${process.env.REACT_APP_IMAGEURLFILE}${publication.file}")`,
              }}
              onClick={() => openPublication(publication)}
            />
            <div className="feed__box-actions">
              <Actions publication={publication} />
            </div>
            <div className="feed__box-form">
              <CommentForm publication={publication} />
            </div>
          </div>
        ))}
      </div>

      {getPublicationsFollowing.length === 0 && (
        <h3 className="there-are-not">
          Comienza a seguir a tus amigos para ver sus
          publicaciones
        </h3>
      )}

      {showModal && (
        <ModalPublication
          show={showModal}
          setShow={setShowModal}
          publication={publicationSelect}
        />
      )}
    </>
  );
}

export default Feed;
