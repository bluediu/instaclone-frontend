import './Home.scss';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Feed from '../../components/Home/Feed';
import UserNotFollowing from '../../components/Home/UserNotFollowing';

function Home() {
  useEffect(() => {
    document.title = 'Instaclone';
  }, []);

  /* 11  y 5
  
  */
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
        <UserNotFollowing />
      </Grid.Column>
    </Grid>
  );
}

export default Home;
