/* Components */
import { Grid, Segment } from 'semantic-ui-react';
import { PostActions, PostDate, PostHeader, PostImage } from '../Chunks';

/* Hooks */
import { useImgToggle } from '../../../../hooks';

/* Interfaces */
import { IPublication } from '../../../../interfaces';

interface IProps {
  pub: IPublication;
  closeModal: () => void;
}

export const Mobile = ({ pub, closeModal }: IProps) => {
  const { toggleImageSize, handleToggleSize } = useImgToggle();

  return (
    <Grid>
      {/* Header */}
      <Grid.Row style={{ height: '10%' }}>
        <div
          className="d-flex align-items-center justify-content-between mx-3"
          style={{ width: '100%', height: 'auto' }}
        >
          <PostHeader user={pub.user} closeModal={closeModal} />
        </div>
      </Grid.Row>

      {/* Image */}
      <Grid.Row onClick={handleToggleSize} style={{ height: '70%' }}>
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
