/* Components */
import { Icon } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../../../hooks';

import {
  usePubContext,
  useLike,
  useLiked,
  useRemoveLike,
  useCountLikes,
} from '../../../../../hooks';

/* Interfaces */
import { IPubProps } from '../../../../../interfaces';

export const PostActions = ({ pub }: IPubProps) => {
  /* Context */
  const { data: lang } = useUI();
  const { action } = lang.posts.preview;

  const { selectedPublication } = usePubContext();
  const { code } = selectedPublication;

  /* Queries */
  const {
    data: likeData,
    isError: isLikeError,
    isLoading: isLikeLoading,
  } = useLiked(code);
  const count = useCountLikes(code);

  /* Mutations */
  const likePostMutation = useLike(code);
  const unlikePostMutation = useRemoveLike(code);

  /* Validations */
  const hasUserLiked = likeData?.liked;
  const isMutatingLike =
    likePostMutation.isPending || unlikePostMutation.isPending;
  const isLikeButtonDisabled = isLikeLoading || isLikeError || isMutatingLike;

  const handleLikeToggle = () => {
    if (hasUserLiked) unlikePostMutation.mutate();
    else likePostMutation.mutate();
  };

  return (
    <>
      <section className="d-flex gap-1 align-items-center cursor-pointer">
        <Icon
          size="large"
          title={action.like}
          color={hasUserLiked ? 'red' : undefined}
          name={hasUserLiked ? 'heart' : 'heart outline'}
          disabled={isLikeButtonDisabled}
          onClick={handleLikeToggle}
        />
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
        <b>{count.isLoading ? '--' : count.data!.count} likes</b>
      </section>
    </>
  );
};
