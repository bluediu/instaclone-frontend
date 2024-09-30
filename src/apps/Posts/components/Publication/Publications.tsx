/* Components */
import { Preview } from './Preview';
import { Divider, Grid, Icon } from 'semantic-ui-react';

/* Interfaces */
import { IPublication } from '../../interfaces';

/* Hooks */
import { useDeviceType } from '../../../../hooks';

import './Publications.scss';

interface IProps {
  pubs: IPublication[];
}

export const Publications = ({ pubs }: IProps) => {
  const isTabletOrMobile = useDeviceType();

  return (
    <main className="publications">
      <Divider />
      <h4 className="ml-1">
        <Icon name="grid layout" /> POSTS
      </h4>

      <Grid padded columns={isTabletOrMobile ? 2 : 3}>
        {pubs.map((p) => (
          <Grid.Column key={p.code} style={{ padding: '0.15rem' }}>
            <Preview pub={p} />
          </Grid.Column>
        ))}
      </Grid>
    </main>
  );
};
