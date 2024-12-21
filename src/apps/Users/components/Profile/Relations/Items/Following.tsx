/* Components */
import { Item } from './Item';

import { SectionSpinner } from '@/apps/UI/components';

/* Hooks */
import { useUI } from '@/hooks';

import { useFollowing } from '@/apps/Users/hooks';

interface IProps {
  username: string;
}

export const Following = ({ username }: IProps) => {
  const { data: lang } = useUI();
  const { profile } = lang;

  const { data, isLoading } = useFollowing(username);

  if (isLoading) return <SectionSpinner />;

  return (
    <div>
      {data!.map((item) => (
        <Item item={item} key={item.id} />
      ))}

      {!data?.length && (
        <section className="my-5 text-center">
          <span>{profile.modal.noFollowing}</span>
        </section>
      )}
    </div>
  );
};
