/* Components */
import { Item } from './Item';
import { SectionSpinner } from '../../../../../UI/components';

/* Hooks */
import { useFollowers } from '../../../../hooks';

interface IProps {
  username: string;
}

export const Followers = ({ username }: IProps) => {
  const { data, isLoading } = useFollowers(username);

  if (isLoading) return <SectionSpinner />;

  return (
    <div>
      {data!.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
