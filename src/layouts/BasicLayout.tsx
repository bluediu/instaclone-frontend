/* Components */
import { Container } from 'semantic-ui-react';
import { Header } from '../apps/UI/components';
import { IReactNodeProps } from '../interfaces';

export const BasicLayout = ({ children }: IReactNodeProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
