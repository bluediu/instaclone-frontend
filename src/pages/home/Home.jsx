import './Home.scss';
import useAuth from '../../hooks/useAuth';

function Home() {
  const auth = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
