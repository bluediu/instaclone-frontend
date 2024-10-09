/* Components */
import { Icon } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../../hooks';

/* Interfaces */
import { IPubProps } from '../../../../interfaces';

export const PostActions = ({ pub }: IPubProps) => {
  const { data } = useUI();
  const { action } = data.posts.preview;

  return (
    <>
      <section className="d-flex gap-1 align-items-center cursor-pointer">
        <Icon name="heart outline" size="large" title={action.like} />
        <Icon name="comment outline" size="large" title={action.comment} />
        <a
          href={pub.image}
          download={pub.code}
          target="_blank"
          title={action.download}
        >
          <Icon name="download" size="large" />
        </a>
      </section>

      <section className="mt-3">
        <b>12 likes</b>
      </section>
    </>
  );
};
