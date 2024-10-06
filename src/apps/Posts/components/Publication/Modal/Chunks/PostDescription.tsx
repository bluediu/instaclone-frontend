/* Components */
import { Link } from 'react-router-dom';
import { Comment } from 'semantic-ui-react';

/* Interfaces */
import { IPublication } from '../../../../interfaces';

/* Hooks */
import { useDate } from '../../../../hooks';

/* Constants */
import { usersPath } from '../../../../../Users/constants';

/* Utils */
import { generateUrl } from '../../../../../../utils';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

export const PostDescription = ({ pub }: { pub: IPublication }) => {
  const { dayjs } = useDate();

  return (
    <Comment.Group size="small" className="ml-3">
      <Comment>
        <Comment.Avatar src={pub.user.avatar || NO_IMAGE} />
        <Comment.Content>
          <Comment.Author
            as={Link}
            to={generateUrl(usersPath.PROFILE, { username: pub.user.username })}
          >
            {pub.user.username}
          </Comment.Author>
          <Comment.Metadata
            title={dayjs(pub.created_at).format('MM/DD/YYYY, hh:mm A')}
          >
            <div>{dayjs(pub.created_at).fromNow()}</div>
          </Comment.Metadata>
          <Comment.Text>{pub.description}</Comment.Text>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};
