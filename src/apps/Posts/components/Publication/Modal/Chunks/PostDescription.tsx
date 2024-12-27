/* Components */
import { Link } from 'react-router-dom';
import { Comment, Divider } from 'semantic-ui-react';

import { Comments, CommentsWrapper } from '@/apps/Posts/components/Comments';

/* Interfaces */
import { IPubProps } from '@/apps/Posts/interfaces';

/* Hooks */
import { useDate } from '@/apps/Posts/hooks';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

/* Utils */
import { generateUrl } from '@/utils';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

export const PostDescription = ({ pub }: IPubProps) => {
  const { dayjs } = useDate();

  return (
    <CommentsWrapper>
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

      <Divider />

      <Comments publication={pub.code} />
    </CommentsWrapper>
  );
};
