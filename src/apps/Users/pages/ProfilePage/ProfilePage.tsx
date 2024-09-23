/* Hooks */
import { useParams } from 'react-router-dom';
import { useDynamicPageTitle } from '../../../../hooks';

/* Components */
import { Profile } from '../../components/Profile';

const ProfilePage = () => {
  const { username } = useParams();

  useDynamicPageTitle(`@${username} · Pictures`);

  return (
    <>
      <Profile username={username!} totalPubs={10} />
    </>
  );
};

export default ProfilePage;
