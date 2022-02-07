import React from 'react';
import './PreviewPublications.scss';
import { Image } from 'semantic-ui-react';

function PreviewPublications({ publication }) {
  console.log(publication);
  return (
    <>
      <div className="preview-publication">
        <Image
          className="preview-publication__image"
          src={`${process.env.REACT_APP_IMAGEURLFILE}${publication.file}`}
        />
      </div>
    </>
  );
}

export default PreviewPublications;
