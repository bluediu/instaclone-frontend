import { useParams } from 'react-router-dom';
import Profile from '../components/User/Profile';
import { useQuery } from '@apollo/client';
import { get, size } from 'lodash';
import { GET_PUBLICATIONS } from '../gql/publication';
import Publications from '../components/Publications';

function User() {
  const { username } = useParams();
  const { data, loading } = useQuery(GET_PUBLICATIONS, {
    variables: { username },
  });

  if (loading) {
    return null;
  }

  const { getPublications } = data;

  return (
    <>
      <Profile
        username={username}
        totalPublications={size(getPublications)}
      />
      <Publications getPublications={getPublications} />
    </>
  );
}

export default User;
