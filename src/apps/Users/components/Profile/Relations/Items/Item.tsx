/* Components */
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

/* Interfaces */
import { IFollow } from '@/apps/Users/interfaces';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

/* Utils */
import { generateUrl } from '@/utils';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

interface IProps {
  item: IFollow;
}

export const Item = ({ item }: IProps) => {
  return (
    <Link
      className="relations__item m-2"
      to={generateUrl(usersPath.PROFILE, { username: item.username })}
    >
      <Image src={item.avatar || NO_IMAGE} />
      <div>
        <p>{`${item.first_name} ${item?.last_name}`}</p>
        <p>{item.username}</p>
      </div>
    </Link>
  );
};
