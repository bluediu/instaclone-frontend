/* Components */
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import { SectionSpinner } from '@/apps/UI/components';

/* Hooks */
import { useUI } from '@/hooks';

import { useNotFollowing } from '@/apps/Users/hooks';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

/* Utils */
import { generateUrl } from '@/utils';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

import './NotFollowing.scss';

export const NotFollowing = () => {
  /* Context */
  const { data } = useUI();

  const query = useNotFollowing();

  if (query.isLoading) return <SectionSpinner />;

  return (
    <section className="not-following">
      <h4>{data.home.suggestions}</h4>
      {query.data?.map((user) => (
        <Link
          to={generateUrl(usersPath.PROFILE, { username: user.username })}
          key={user.username}
          className="not-following__user"
        >
          <Image src={user.avatar || NO_IMAGE} avatar />

          <span>
            {user.first_name
              ? `${user.first_name} ${user.last_name}`
              : `${user.username}`}
          </span>
        </Link>
      ))}
    </section>
  );
};
