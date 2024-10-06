/* Components */
import { Divider } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../hooks';

export const Loading = () => {
  const { data } = useUI();

  return (
    <>
      <Divider className="m-5" />
      <p className="text-center m-5 text-secondary">{data.posts.loader}</p>
    </>
  );
};
