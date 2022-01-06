import { useParams } from 'react-router-dom';
import Profile from '../components/Profile/Profile';

function User() {
  const { username } = useParams();

  return (
    <>
      <Profile username={username} />
    </>
  );
}

export default User;
