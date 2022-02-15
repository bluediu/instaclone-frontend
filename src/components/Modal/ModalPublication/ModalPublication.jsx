import React from 'react';
import { Modal, Grid } from 'semantic-ui-react';
import Comments from './Comments';
import CommentForm from './CommentForm/CommentForm';
import './ModalPublication.scss';
import { GET_COMMENTS } from '../../../gql/comment';
import { useQuery } from '@apollo/client';
import Actions from './Actions';

function ModalPublication({ show, setShow, publication }) {
  const onClose = () => setShow(false);

  /*
   TODO: You can make the query in comment component and use polling, but it is not efficient that server maintain several petition like: profile, followers and publications for example 
  */
  const { data, loading, refetch } = useQuery(GET_COMMENTS, {
    variables: { idPublication: publication.id },
  });

  return (
    <Modal
      open={show}
      onClose={onClose}
      className="modal-publication"
    >
      <Grid>
        <Grid.Column
          className="modal-publication__left"
          width={10}
          style={{
            backgroundImage: `url("${process.env.REACT_APP_IMAGEURLFILE}${publication.file}")`,
          }}
        />

        <Grid.Column
          className="modal-publication__right"
          width={6}
        >
          <Comments data={data} loading={loading} />
          <Actions publication={publication} />
          <CommentForm
            publication={publication}
            refetch={refetch}
          />
        </Grid.Column>
      </Grid>
    </Modal>
  );
}

export default ModalPublication;
