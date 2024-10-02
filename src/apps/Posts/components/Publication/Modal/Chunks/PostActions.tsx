/* Components */
import { Icon } from 'semantic-ui-react';

/* Interfaces */
import { IPubProps } from '../../../../interfaces';

export const PostActions = ({ pub }: IPubProps) => {
  return (
    <>
      <section className="d-flex gap-1 align-items-center cursor-pointer">
        <Icon name="heart outline" size="large" />
        <Icon name="comment outline" size="large" />
        <a href={pub.image} download={pub.code} target="_blank">
          <Icon name="download" size="large" />
        </a>
      </section>

      <section className="mt-3">
        <b>12 likes</b>
      </section>
    </>
  );
};
