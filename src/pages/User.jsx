import { useParams } from 'react-router-dom';

function User() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>User...</h1>
    </div>
  );
}

export default User;
