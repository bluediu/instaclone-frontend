/* Components */
import { Container, Grid, Image } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import { Search } from './Search';
import { RightHeader } from './RightHeader';

/* Statics */
import LOGO from '/img/instaclone.png';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

import './Header.scss';

export const Header = () => {
  return (
    <section className="header">
      <Container>
        <Grid>
          <Grid.Column
            computer={3}
            mobile={16}
            className="header__logo mobile-center__logo"
          >
            <Link to={usersPath.HOME}>
              <Image src={LOGO} alt="instaclone"></Image>
            </Link>
          </Grid.Column>

          <Grid.Column computer={10} mobile={16}>
            <Search />
          </Grid.Column>

          <Grid.Column computer={3} mobile={16}>
            <RightHeader />
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  );
};
