/* Components */
import { Link } from 'react-router-dom';
import { FeedLoader } from '../../../UI/components';
import { Button, Icon, Image } from 'semantic-ui-react';
import { Modal as PublicationModal, PostActions } from '../Publication/Modal';

/* Hooks */
import { useUI } from '../../../../hooks';
import { usePubContext, usePubsFeed } from '../../hooks';

/* Utils */
import { generateUrl } from '../../../../utils';

/* Constants */
import { usersPath } from '../../../Users/constants';

/* Statics */
import NO_IMAGE from '/img/avatar.png';

import './Feed.scss';

export const Feed = () => {
  /* Context */
  const { data } = useUI();

  const query = usePubsFeed({ page: 1 });

  const { openPublicationModal, setSelectedPublication } = usePubContext();

  if (query.isLoading) return <FeedLoader />;

  const publications = query.data?.pages.flat() || [];

  return (
    <main className="feed">
      {publications.map((pub) => (
        <article className="feed__box" key={pub.code}>
          <Link
            to={generateUrl(usersPath.PROFILE, { username: pub.user.username })}
          >
            <section className="feed__box-user">
              <Image src={pub.user.avatar || NO_IMAGE} avatar loading="lazy" />
              <span>
                {!pub.user.first_name
                  ? pub.user.username
                  : `${pub.user.first_name} ${pub.user.last_name}`}
              </span>
            </section>
          </Link>

          <div
            className="feed__box-photo"
            style={{
              backgroundImage: `url("${pub.image}")`,
              borderRadius: '4px',
            }}
            onClick={() => {
              setSelectedPublication(pub);
              openPublicationModal();
            }}
          />

          <section className="feed__box-actions">
            <PostActions pub={pub} code={pub.code} />
          </section>

          <section className="feed__box-form"></section>
          <div className="mt-2">
            <b className="mr-2 ">{pub.user.username}</b>
            {pub.description}
          </div>
        </article>
      ))}

      {!publications.length && (
        <h3 className="there-are-not m-5">{data.home.noFeed}</h3>
      )}

      <section className={`text-center ${!publications.length && 'd-none'}`}>
        <Button
          className="my-4"
          color="black"
          disabled={!query.hasNextPage}
          onClick={() => query.fetchNextPage()}
        >
          {query.isFetching ? (
            <span>
              <Icon loading name="spinner" /> {data.home.loading}
            </span>
          ) : (
            <span>
              <Icon name="sync alternate" />
              {data.home.loadingMore}
            </span>
          )}
        </Button>
      </section>

      <PublicationModal />
    </main>
  );
};
