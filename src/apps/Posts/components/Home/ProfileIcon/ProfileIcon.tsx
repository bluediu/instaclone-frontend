/* Components */
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '@/hooks';
import { useAuth, useUser } from '@/apps/Users/hooks';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

/* Utils */
import { generateUrl } from '@/utils';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

import './ProfileIcon.scss';

export const ProfileIcon = () => {
  /* Context */
  const { data } = useUI();
  const { auth } = useAuth();

  const { data: user } = useUser(auth!.username);

  return (
    <section className="user__profile">
      <div className="user__profile-info">
        <Image
          src={auth?.avatar || NO_IMAGE}
          size="tiny"
          alt="profile"
          avatar
        />

        <div className="user__profile-info-name">
          <span>{user?.username}</span>
          <span>
            {user?.first_name} {user?.last_name}
          </span>
        </div>
      </div>

      <Link
        to={generateUrl(usersPath.PROFILE, { username: user?.username || 0 })}
        className="user__profile-link"
      >
        {data.home.profileIconLink}
      </Link>
    </section>
  );
};
