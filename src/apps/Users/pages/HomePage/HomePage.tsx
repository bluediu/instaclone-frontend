/* Components */
import { Grid } from 'semantic-ui-react';
import { NotFollowing } from '../../components';
import { Feed } from '../../../Posts/components/Feed';
import { ProfileIcon } from '../../../Posts/components/Home';

/* Hooks */
import { useDynamicPageTitle } from '../../../../hooks';

import './HomePage.scss';

const HomePage = () => {
  useDynamicPageTitle('Home');

  return (
    <Grid className="home">
      <Grid.Column className="home__left" computer={11} mobile={16}>
        <Feed />
      </Grid.Column>

      <Grid.Column className="home__right" computer={5}>
        <ProfileIcon />
        <NotFollowing />
      </Grid.Column>
    </Grid>
  );
};

export default HomePage;
