/* Components */
import { Link } from 'react-router-dom';
import { Icon, Image } from 'semantic-ui-react';

/* Interfaces */
import { IUser } from '../../../../../Users/interfaces';

/* Utils */
import { generateUrl } from '../../../../../../utils';

/* Constants */
import { usersPath } from '../../../../../Users/constants';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

interface IProps {
  user: IUser;
  closeBtn?: boolean;
  closeModal?: () => void;
}

export const PostHeader = (props: IProps) => {
  const { user, closeBtn = true, closeModal } = props;

  return (
    <>
      <section>
        {closeBtn && (
          <Icon
            name="angle left"
            size="large"
            className="text-secondary cursor-pointer"
            onClick={closeModal}
          />
        )}

        <Link to={generateUrl(usersPath.PROFILE, { username: user.username })}>
          <Image size="mini" src={user.avatar || NO_IMAGE} avatar />
        </Link>
        <b className="ml-2">{user.username}</b>
      </section>

      <section className="cursor-pointer">
        <Icon
          name="ellipsis horizontal"
          size="large"
          style={{ opacity: '0.7' }}
        />
      </section>
    </>
  );
};
