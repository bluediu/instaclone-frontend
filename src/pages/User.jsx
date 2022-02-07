import { useParams } from 'react-router-dom';
import Profile from '../components/User/Profile';
import { useQuery } from '@apollo/client';
import { size } from 'lodash';
import { GET_PUBLICATIONS } from '../gql/publication';
import Publications from '../components/Publications';
import { useEffect } from 'react';

function User() {
  const { username } = useParams();
  const { data, loading, startPolling, stopPolling } = useQuery(
    GET_PUBLICATIONS,
    {
      variables: { username },
    }
  );

  useEffect(() => {
    startPolling(2000);
    return () => stopPolling();
  }, [startPolling, stopPolling]);

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
