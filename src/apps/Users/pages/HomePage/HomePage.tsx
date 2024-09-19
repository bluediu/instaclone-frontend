/* Components */
import { Button, Grid } from 'semantic-ui-react';

/* Hooks */
import { useDynamicPageTitle } from '../../../../hooks';

import './HomePage.scss';

const HomePage = () => {
  useDynamicPageTitle('Home');

  return (
    <Grid className="home">
      <Grid.Column className="home__left" computer={11} mobile={16}>
        <h1>FEED</h1>
        <Button primary>Click Here</Button>
      </Grid.Column>

      <Grid.Column className="home__right" computer={5}>
        {/* <UserProfile /> */}
        {/* <UserNotFollowing /> */}
        <h3>USER</h3>
      </Grid.Column>
    </Grid>
  );
};

export default HomePage;
