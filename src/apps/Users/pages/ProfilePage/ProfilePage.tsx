/* Components */
import { Profile } from '../../components/Profile';
import { Publications, Loading } from '../../../Posts/components/Publication';

/* Hooks */
import { useParams } from 'react-router-dom';
import { usePubs } from '../../../Posts/hooks';
import { useDynamicPageTitle } from '../../../../hooks';

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
