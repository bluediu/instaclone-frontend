import { useState } from 'react';

/* Components */
import { Modal } from '../Modal';
import { Image } from 'semantic-ui-react';

/* Interfaces */
import { IPublication } from '../../../interfaces';

import './Preview.scss';

interface IProps {
  pub: IPublication;
}

export const Preview = ({ pub }: IProps) => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const closeModal = () => setShow(false);

  return (
    <>
      <section className="preview-pub">
        <Image
          className="preview-pub__image"
          loading="lazy"
          src={pub.image}
          onClick={showModal}
        />
      </section>

      <Modal show={show} closeModal={closeModal} publication={pub} />
    </>
  );
};
