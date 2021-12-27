import './Header.scss';
import { Container, Grid, Image } from 'semantic-ui-react';
import Logo from '../../assets/instaclone.png';
import { Link } from 'react-router-dom';
import RightHeader from './RightHeader';

function Header() {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className="header__logo">
            <Link to="/">
              <Image src={Logo} alt="instaclone" />
            </Link>
          </Grid.Column>

          <Grid.Column width={10}>
            <p>Buscardor</p>
          </Grid.Column>

          <Grid.Column width={3}>
            <RightHeader />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
