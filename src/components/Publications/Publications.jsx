import React from 'react';
import { Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import './Publications.scss';
import PreviewPublications from './PreviewPublications/PreviewPublications';

function Publications({ getPublications }) {
  return (
    <div className="publications">
      <h1>Publicaciones</h1>
      <Grid columns={4}>
        {map(getPublications, (publication, index) => (
          <Grid.Column
            key={index}
            computer={4}
            mobile={16}
            tablet={8}
          >
            <PreviewPublications publication={publication} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}

export default Publications;
