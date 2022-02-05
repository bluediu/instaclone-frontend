import React from 'react';
import { Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import './Publications.scss';

function Publications({ getPublications }) {
  return (
    <div className="publications">
      <h1>Publicaciones</h1>
      <Grid columns={4}>
        {map(getPublications, (publication, index) => (
          <Grid.Column key={index}>{publication.id}</Grid.Column>
        ))}
      </Grid>
    </div>
  );
}

export default Publications;
