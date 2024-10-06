/* Components */
import { Grid, Segment } from 'semantic-ui-react';
import { PostActions, PostDate, PostHeader, PostImage } from '../Chunks';

/* Hooks */
import { useImgToggle, usePubContext } from '../../../../hooks';

import './Mobile.scss';

export const Mobile = () => {
  const { selectedPublication: pub } = usePubContext();

  const { toggleImageSize, handleToggleSize } = useImgToggle();

  return (
    <Grid>
      {/* Header */}
      <Grid.Row className="mobile-header-size">
        <div
          className="d-flex align-items-center justify-content-between mx-3"
          style={{ width: '100%', height: 'auto' }}
        >
          <PostHeader />
        </div>
      </Grid.Row>

      {/* Image */}
      <Grid.Row onClick={handleToggleSize} className="mobile-image-size">
        <PostImage image={pub.image} toggleSize={toggleImageSize} />
      </Grid.Row>

      {/* Actions */}
      <Grid.Row className="p-0">
        <Segment vertical className="ml-2">
          <PostActions pub={pub} />
          <div className="mt-2">
            <b className="mr-2 ">{pub.user.username}</b>
            {pub.description}
          </div>
          <PostDate createdAt={pub.created_at} />
        </Segment>
      </Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
    </Grid>
  );
};
