import { useEffect } from 'react';

/* Components */
import { Grid } from 'semantic-ui-react';
import UserNotFollowing from '../../components/Home/UserNotFollowing';
import Feed from '../../components/Home/Feed';

import UserProfile from '../../components/Home/UserProfile';
import './Home.scss';

function Home() {
  useEffect(() => {
    document.title = 'Instaclone';
  }, []);

  return (
    <Grid className="home">
      <Grid.Column
        className="home__left"
        computer={11}
        mobile={16}
      >
        <Feed />
      </Grid.Column>
      <Grid.Column className="home__right" computer={5}>
        <UserProfile />
        <UserNotFollowing />
      </Grid.Column>
    </Grid>
  );
}

export default Home;
