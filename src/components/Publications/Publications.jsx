import React from 'react';
import { map } from 'lodash';

/* Components */
import { Grid } from 'semantic-ui-react';
import PreviewPublications from './PreviewPublications/PreviewPublications';

import './Publications.scss';

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

      {getPublications.length === 0 && (
        <h3 className="there-are-not">
          Este perfil aún no tiene publicaciones
        </h3>
      )}
    </div>
  );
}

export default Publications;
