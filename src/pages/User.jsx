import { useParams } from 'react-router-dom';
import Profile from '../components/User/Profile';
import { useQuery } from '@apollo/client';
import { size } from 'lodash';
import { GET_PUBLICATIONS } from '../gql/publication';
import Publications from '../components/Publications';
import { useEffect } from 'react';
import FeedLoader from '../components/Home/Feed/FeedLoader/FeedLoader';

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
