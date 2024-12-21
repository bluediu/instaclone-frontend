/* Components */
import { Profile } from '@/apps/Users/components/Profile';

import { Publications, Loading } from '@/apps/Posts/components/Publication';

/* Hooks */
import { useParams } from 'react-router-dom';

import { useDynamicPageTitle } from '@/hooks';

import { usePubs } from '@/apps/Posts/hooks';

const ProfilePage = () => {
  const { username } = useParams();

  const query = usePubs(username!);

  useDynamicPageTitle(`@${username} · Pictures`);

  return (
    <>
      <Profile username={username!} totalPubs={query.data?.length} />
      {query.isLoading ? <Loading /> : <Publications pubs={query.data!} />}
    </>
  );
};

export default ProfilePage;
