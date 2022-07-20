/* Components */
import { Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RightHeader from './RightHeader';
import Search from './Search/Search';

import Logo from '../../assets/instaclone.png';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column
            computer={3}
            mobile={16}
            className="header__logo mobile-center_logo"
          >
            <Link to="/">
              <Image src={Logo} alt="instaclone" />
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
    </div>
  );
}

export default Header;
