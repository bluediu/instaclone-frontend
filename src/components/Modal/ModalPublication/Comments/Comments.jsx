import React from 'react';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import ImageNotFound from '../../../../assets/avatar.png';
import './Comments.scss';

function Comments({ data, loading }) {
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
            src={comment.idUser.avatar}
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
