/* Components */
import { Link } from 'react-router-dom';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

export const NoUserFound = () => {
  return (
    <Container textAlign="center" style={{ padding: '5em 0' }}>
      <Icon name="warning circle" size="huge" color="red" />
      <Header as="h1" content="User Not Found" />
      <p>Oops! The user you're looking for doesn't exist.</p>
      <Button as={Link} to="/" primary className="mt-5">
        <Icon name="home" />
        Go Back Home
      </Button>
    </Container>
  );
};
