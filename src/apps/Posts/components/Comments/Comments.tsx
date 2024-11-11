/* Components */
import { Link } from 'react-router-dom';
import { Comment, Dropdown } from 'semantic-ui-react';
import { SectionSpinner } from '../../../UI/components';

/* Hooks */
import { useUI } from '../../../../hooks';
import { useAuth } from '../../../Users/hooks';
import { useComments, useDate, useRemoveComment } from '../../hooks';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

/* Constants */
import { usersPath } from '../../../Users/constants';

/* Utils */
import { generateUrl } from '../../../../utils';

interface IProps {
  publication: string;
}

export const Comments = ({ publication }: IProps) => {
  const { dayjs } = useDate();

  /* Context */
  const { data: lang } = useUI();
  const { comment } = lang.posts.preview;

  const { auth } = useAuth();

  /* Queries */
  const { data, isLoading } = useComments(publication);

  /* Mutations */
  const mutation = useRemoveComment();

  if (isLoading) return <SectionSpinner />;

  return (
    <>
      {data?.map((comment) => (
        <Comment key={comment.id}>
          <Comment.Avatar src={comment.user.avatar || NO_IMAGE} />
          <Comment.Content>
            <Comment.Author
              as={Link}
              to={generateUrl(usersPath.PROFILE, {
                username: comment.user.username,
              })}
            >
              {comment.user.username}
            </Comment.Author>
            <Comment.Metadata
              title={dayjs(comment.created_at).format('MM/DD/YYYY, hh:mm A')}
            >
              <div>{dayjs(comment.created_at).fromNow()}</div>
            </Comment.Metadata>
            <Comment.Text>
              <div className="d-flex align-items-center justify-content-between">
                {comment.comment}

                {comment.user.username === auth?.username && (
                  <Dropdown
                    floating
                    direction="left"
                    icon="ellipsis horizontal"
                    className="text-secondary mr-2"
                    disabled={mutation.isPending}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          mutation.mutate(comment.id);
                        }}
                      >
                        <span className="text-danger">Delete</span>
                      </Dropdown.Item>
                      <Dropdown.Item>Cancel</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            </Comment.Text>
          </Comment.Content>
        </Comment>
      ))}

      {!data?.length && (
        <section className="d-flex flex-column align-items-center justify-content-center">
          <h2>{comment.notFound}</h2>
          <span>{comment.notFoundSubtitle}</span>
        </section>
      )}
    </>
  );
};
