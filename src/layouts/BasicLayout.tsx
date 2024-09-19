import { ReactElement } from 'react';

/* Components */
import { Container } from 'semantic-ui-react';
import { Header } from '../apps/UI/components';

interface IProps {
  children: ReactElement | ReactElement[];
}

export const BasicLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
