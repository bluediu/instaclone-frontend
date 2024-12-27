/* Components */
import { Grid, Segment } from 'semantic-ui-react';
import { CommentForm, Comments } from '@/apps/Posts/components/Comments';
import {
  PostHeader,
  PostDescription,
  PostImage,
  PostActions,
  PostDate,
} from '../Chunks';

/* Hooks */
import { useImgToggle, usePubContext } from '@/apps/Posts/hooks';

import './Desktop.scss';

export const Desktop = () => {
  const { selectedPublication: pub } = usePubContext();

  const { toggleImageSize, handleToggleSize } = useImgToggle();

  return (
    <Grid>
      <Grid.Column
        className="modal-publication__left"
        computer={10}
        mobile={16}
        onClick={handleToggleSize}
      >
        <PostImage image={pub.image} toggleSize={toggleImageSize} />
      </Grid.Column>

      <Grid.Column
        className="modal-publication__right"
        computer={6}
        mobile={16}
      >
        {/* Header */}
        <Segment
          vertical
          className="d-flex align-items-center justify-content-between mx-3"
        >
          <PostHeader showCloseButton={false} />
        </Segment>

        {/* Comments */}
        <Segment vertical className="comment-box-size">
          <PostDescription pub={pub} />

          {!pub.description && <Comments publication={pub.code} />}
        </Segment>

        {/* Actions */}
        <Segment vertical className="ml-2">
          <PostActions pub={pub} />
          <PostDate createdAt={pub.created_at} />
        </Segment>
        <CommentForm />
      </Grid.Column>
    </Grid>
  );
};
