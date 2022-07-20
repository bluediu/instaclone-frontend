/* hooks */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { size } from 'lodash';

/* Components */
import Profile from '../components/User/Profile';
import Publications from '../components/Publications';
import FeedLoader from '../components/Home/Feed/FeedLoader/FeedLoader';

/* GraphQL */
import { useQuery } from '@apollo/client';
import { GET_PUBLICATIONS } from '../gql/publication';

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
    return (
      <div className="publications-spinner">
        <FeedLoader />
        <span>Obtenido publicaciones...</span>
      </div>
    );
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
