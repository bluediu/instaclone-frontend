/* Components */
import { Grid } from 'semantic-ui-react';

import { NotFollowing } from '@/apps/Users/components';

import { Feed } from '@/apps/Posts/components/Feed';
import { ProfileIcon } from '@/apps/Posts/components/Home';

/* Hooks */
import { useDeviceType, useDynamicPageTitle } from '@/hooks';

import './HomePage.scss';

const HomePage = () => {
  useDynamicPageTitle('Home');
  const isTabletOrMobile = useDeviceType();

  return (
    <Grid className="home">
      <Grid.Column className="home__left" computer={11} mobile={16}>
        <Feed />
      </Grid.Column>

      {!isTabletOrMobile && (
        <Grid.Column className="home__right" computer={5}>
          <ProfileIcon />
          <NotFollowing />
        </Grid.Column>
      )}
    </Grid>
  );
};

export default HomePage;
