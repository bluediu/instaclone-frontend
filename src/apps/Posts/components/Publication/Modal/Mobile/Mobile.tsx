/* Components */
import { Grid, Segment } from 'semantic-ui-react';

import { ModalBasic } from '@/shared';

import { MobileComments } from './Comments';
import { PostActions, PostDate, PostHeader, PostImage } from '../Chunks';

/* Hooks */
import { useModal, useUI } from '@/hooks';

import { useImgToggle, usePubContext } from '@/apps/Posts/hooks';

import './Mobile.scss';

export const Mobile = () => {
  /* Context */
  const { data: lang } = useUI();
  const { comment } = lang.posts.preview;

  const { selectedPublication: pub } = usePubContext();

  const { toggleImageSize, handleToggleSize } = useImgToggle();

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal 
  } = useModal();

  const showComments = () => {
    openModal(comment.title, <MobileComments publication={pub.code} />);
  };

  return (
    <>
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
            <div
              className="comments-trigger text-secondary cursor-pointer mt-2"
              onClick={showComments}
            >
              {comment.link}
            </div>
          </Segment>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>

      <ModalBasic
        padding={false}
        show={showModal}
        title={modalTitle}
        onClose={closeModal}
        showCloseButton={true}
        children={modalContent ?? <span>No content</span>}
      />
    </>
  );
};
