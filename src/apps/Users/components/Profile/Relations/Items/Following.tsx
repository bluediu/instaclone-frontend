/* Components */
import { Item } from './Item';
import { Icon } from 'semantic-ui-react';

/* Hooks */
import { useFollowing } from '../../../../hooks';

interface IProps {
  username: string;
}

export const Following = ({ username }: IProps) => {
  const { data, isLoading } = useFollowing(username);

  if (isLoading)
    return (
      <section className="text-center my-5">
        <Icon loading name="spinner" />
      </section>
    );

  return (
    <div>
      {data!.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};
