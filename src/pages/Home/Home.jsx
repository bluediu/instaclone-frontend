import './Home.scss';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Feed from '../../components/Home/Feed';

function Home() {
  useEffect(() => {
    document.title = 'Instaclone';
  }, []);

  return (
    <Grid className="home">
      <Grid.Column className="home__left" width={11}>
        <Feed />
      </Grid.Column>
      <Grid.Column className="home__right" width={5}>
        <h2>NO SEGUIDO</h2>
      </Grid.Column>
    </Grid>
  );
}

export default Home;
