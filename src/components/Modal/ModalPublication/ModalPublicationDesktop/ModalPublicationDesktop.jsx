import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import Actions from '../Actions';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments';

function ModalPublicationDesktop({
  publication,
  data,
  loading,
  refetch,
}) {
  const [toggleImageSize, setToggleImageSize] = useState(true);

  const handleToggleSize = () => {
    setToggleImageSize(!toggleImageSize);
  };

  return (
    <Grid>
      <Grid.Column
        className="modal-publication__left"
        computer={10}
        mobile={16}
        style={{
          backgroundImage: `url("${process.env.REACT_APP_IMAGEURLFILE}${publication.file}")`,
          backgroundSize: toggleImageSize ? 'cover' : 'contain',
        }}
        onClick={handleToggleSize}
      />

      <Grid.Column
        className="modal-publication__right"
        computer={6}
        mobile={16}
      >
        <Comments data={data} loading={loading} />
        <Actions publication={publication} />
        <CommentForm
          publication={publication}
          refetch={refetch}
        />
      </Grid.Column>
    </Grid>
  );
}

export default ModalPublicationDesktop;
