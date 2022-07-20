import React, { useEffect, useState } from 'react';

/* Components */
import { Modal } from 'semantic-ui-react';
import ModalPublicationMobile from './ModalPublicationMobile';
import ModalPublicationDesktop from './ModalPublicationDesktop';

/* GraphQL */
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../../../gql/comment';

import './ModalPublication.scss';

import { useWindowSize } from 'react-use';

function ModalPublication({ show, setShow, publication }) {
  const { width } = useWindowSize();
  const [showDesktop, setShowDesktop] = useState(true);

  const onClose = () => setShow(false);

  /*
   TODO: You can make the query in comment component and use polling, but it is not efficient that server maintain several petition like: profile, followers and publications for example 
  */
  const { data, loading, refetch } = useQuery(GET_COMMENTS, {
    variables: { idPublication: publication.id },
  });

  useEffect(() => {
    if (width <= 532) {
      setShowDesktop(false);
    } else {
      setShowDesktop(true);
    }
  }, [width]);

  return (
    <Modal
      open={show}
      onClose={onClose}
      className="modal-publication"
    >
      {showDesktop ? (
        <ModalPublicationDesktop
          publication={publication}
          data={data}
          loading={loading}
          refetch={refetch}
        />
      ) : (
        <ModalPublicationMobile
          publication={publication}
          data={data}
          loading={loading}
          refetch={refetch}
        />
      )}
    </Modal>
  );
}

export default ModalPublication;
