import React, { useState } from 'react';
import './PreviewPublications.scss';
import { Image } from 'semantic-ui-react';
import ModalPublication from '../../Modal/ModalPublication';

function PreviewPublications({ publication }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="preview-publication">
        <Image
          className="preview-publication__image"
          loading="lazy"
          src={`${process.env.REACT_APP_IMAGEURLFILE}${publication.file}`}
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
