import React from 'react';
import { Modal, Grid } from 'semantic-ui-react';
import Comments from './Comments';
import CommentForm from './CommentForm/CommentForm';
import './ModalPublication.scss';
import { GET_COMMENTS } from '../../../gql/comment';
import { useQuery } from '@apollo/client';

function ModalPublication({ show, setShow, publication }) {
  const onClose = () => setShow(false);

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
          <div>Acciones</div>
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
