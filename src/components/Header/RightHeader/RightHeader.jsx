import './RightHeader.scss';
import { Icon, Image } from 'semantic-ui-react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import ImageNotFound from '../../../assets/avatar.png';

function RightHeader() {
  const { auth } = useAuth();

  return (
    <>
      <div className="right-header">
        <Link to="/">
          <Icon name="home" />
        </Link>
        <Icon name="plus" />
        <Link to={`/${auth.username}`}>
          <Image src={ImageNotFound} avatar />
        </Link>
      </div>
    </>
  );
}

export default RightHeader;
