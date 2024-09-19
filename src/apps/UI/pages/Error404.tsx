/* Components */
import { Link } from 'react-router-dom';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

const Error404 = () => {
  return (
    <Container textAlign="center" style={{ padding: '5em 0' }}>
      <Icon name="warning circle" size="huge" color="red" />
      <Header as="h1" content="404 - Page Not Found" />
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Button as={Link} to="/" primary className="mt-5">
        <Icon name="home" />
        Go Back Home
      </Button>
    </Container>
  );
};

export default Error404;
