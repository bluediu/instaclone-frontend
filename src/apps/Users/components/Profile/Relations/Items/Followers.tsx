/* Components */
import { Item } from './Item';

import { SectionSpinner } from '@/apps/UI/components';

/* Hooks */
import { useUI } from '@/hooks';

import { useFollowers } from '@/apps/Users/hooks';

interface IProps {
  username: string;
}

export const Followers = ({ username }: IProps) => {
  const { data: lang } = useUI();
  const { profile } = lang;

  const { data, isLoading } = useFollowers(username);

  if (isLoading) return <SectionSpinner />;

  return (
    <div>
      {data!.map((item) => (
        <Item item={item} key={item.id} />
      ))}

      {!data?.length && (
        <section className="my-5 text-center">
          <span>{profile.modal.noFollowers}</span>
        </section>
      )}
    </div>
  );
};
