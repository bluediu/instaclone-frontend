/* Components */
import { Image } from 'semantic-ui-react';

/* Interfaces */
import { IPublication } from '@/apps/Posts/interfaces';

import './Publication.scss';

interface IProps {
  pub: IPublication;
  showModal: () => void;
}

export const Publication = ({ pub, showModal }: IProps) => {
  return (
    <section className="preview-pub">
      <Image
        className="preview-pub__image"
        loading="lazy"
        src={pub.image}
        onClick={showModal}
      />
    </section>
  );
};
