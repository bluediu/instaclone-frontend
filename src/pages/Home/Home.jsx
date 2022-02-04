import './Home.scss';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';

function Home() {
  const auth = useAuth();

  useEffect(() => {
    document.title = 'Instaclone';
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
