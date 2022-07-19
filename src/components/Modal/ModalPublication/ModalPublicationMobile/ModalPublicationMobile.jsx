import { Grid, Image } from 'semantic-ui-react';
import Actions from '../Actions';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments';
import './ModalPublicationMobile.scss';

function ModalPublicationMobile({
  publication,
  data,
  loading,
  refetch,
}) {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Image src={publication.file} fluid />
        </Grid.Row>
        <Grid.Row>
          <Actions publication={publication} />
          <Comments data={data} loading={loading} />
          <CommentForm
            publication={publication}
            refetch={refetch}
          />
        </Grid.Row>
      </Grid>
    </>
  );
}

export default ModalPublicationMobile;
