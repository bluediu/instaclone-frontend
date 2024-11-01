/* Components */
import { Item } from './Item';
import { Icon } from 'semantic-ui-react';

/* Hooks */
import { useFollowers } from '../../../../hooks';

interface IProps {
  username: string;
}

export const Followers = ({ username }: IProps) => {
  const { data, isLoading } = useFollowers(username);

  if (isLoading)
    return (
      <section className="text-center my-5">
        <Icon loading name="spinner" />
      </section>
    );

  return (
    <div>
      {data!.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
