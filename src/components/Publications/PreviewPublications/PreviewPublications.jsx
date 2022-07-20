import React, { useState } from 'react';

/* Components */
import { Image } from 'semantic-ui-react';
import ModalPublication from '../../Modal/ModalPublication';

import './PreviewPublications.scss';

function PreviewPublications({ publication }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="preview-publication">
        <Image
          className="preview-publication__image"
          loading="lazy"
          src={publication.file}
          onClick={() => setShowModal(true)}
        />
      </div>

      <ModalPublication
        show={showModal}
        setShow={setShowModal}
        publication={publication}
      />
    </>
  );
}

export default PreviewPublications;
