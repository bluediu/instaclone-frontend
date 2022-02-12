import React, { useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../../../../gql/comment';
import ImageNotFound from '../../../../assets/avatar.png';
import './Comments.scss';

function Comments({ publication }) {
  const { data, loading, startPolling, stopPolling } = useQuery(
    GET_COMMENTS,
    {
      variables: { idPublication: publication.id },
    }
  );

  useEffect(() => {
    startPolling(1000);

    return () => stopPolling();
  }, [startPolling, stopPolling]);

  if (loading) return null;

  const { getComments } = data;

  return (
    <div className="comments">
      {map(getComments, (comment, index) => (
        <Link
          to={`/${comment.idUser.username}`}
          key={index}
          className="comment"
        >
          <Image
            src={`${process.env.REACT_APP_IMAGEURL}${comment.idUser.avatar}`}
            onError={(e) => {
              e.target.src = ImageNotFound;
            }}
            avatar
          />
          <div>
            <p>{comment.idUser.username}</p>
            <p>{comment.comment}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Comments;
