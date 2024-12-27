/* Components */
import { Publication } from './Publication';
import { Modal as PublicationModal } from './Modal';
import { Divider, Grid, Icon } from 'semantic-ui-react';

/* Interfaces */
import { IPublication } from '@/apps/Posts/interfaces';

/* Hooks */
import { useDeviceType, useUI } from '@/hooks';

import { usePubContext } from '@/apps/Posts/hooks';

import './Publications.scss';

interface IProps {
  pubs: IPublication[];
}

export const Publications = ({ pubs }: IProps) => {
  const { data } = useUI();

  const { openPublicationModal, setSelectedPublication } = usePubContext();

  const isTabletOrMobile = useDeviceType();

  return (
    <main className="publications">
      <Divider />
      <h4 className="ml-1">
        <Icon name="grid layout" /> {data.posts.title}
      </h4>

      <Grid padded columns={isTabletOrMobile ? 2 : 3}>
        {pubs.map((p) => (
          <Grid.Column
            key={p.code}
            className="publications__column"
            onClick={() => setSelectedPublication(p)}
          >
            <Publication pub={p} showModal={openPublicationModal} />
          </Grid.Column>
        ))}
      </Grid>

      {!pubs.length && (
        <h5 className="text-center text-secondary">{data.posts.notPosts}</h5>
      )}

      <PublicationModal />
    </main>
  );
};
