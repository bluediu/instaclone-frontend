/* Components */
import { Divider } from 'semantic-ui-react';

export const Loading = () => {
  return (
    <>
      <Divider className="m-5" />
      <p className="text-center m-5 text-secondary">Loading publications...</p>
    </>
  );
};
