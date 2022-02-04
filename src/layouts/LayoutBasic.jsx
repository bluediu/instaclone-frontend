import { Container } from 'semantic-ui-react';
import Header from '../components/Header';

function LayoutBasic({ children }) {
  return (
    <>
      <Header />
      <Container className="layout-basic">{children}</Container>
    </>
  );
}

export default LayoutBasic;
