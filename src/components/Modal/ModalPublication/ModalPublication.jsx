import React from 'react';
import { Modal, Grid } from 'semantic-ui-react';
import CommentForm from './CommentForm/CommentForm';
import './ModalPublication.scss';

function ModalPublication({ show, setShow, publication }) {
  const onClose = () => setShow(false);

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
          <div>Comentarios</div>
          <div>Acciones</div>
          <CommentForm publication={publication} />
        </Grid.Column>
      </Grid>
    </Modal>
  );
}

export default ModalPublication;
