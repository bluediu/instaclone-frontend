/* Components */
import { Item } from './Item';
import { SectionSpinner } from '../../../../../UI/components';

/* Hooks */
import { useFollowing } from '../../../../hooks';

interface IProps {
  username: string;
}

export const Following = ({ username }: IProps) => {
  const { data, isLoading } = useFollowing(username);

  if (isLoading) return <SectionSpinner />;

  return (
    <div>
      {data!.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
