import React from 'react';
import useAuth from '../../hooks/useAuth';

function Home() {
  const auth = useAuth();

  console.log(auth);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
