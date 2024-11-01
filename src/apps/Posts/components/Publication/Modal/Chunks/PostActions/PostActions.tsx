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

interface IProps extends IPubProps {
  code?: string;
}

export const PostActions = ({ pub, code }: IProps) => {
  /* Context */
  const { data: lang } = useUI();
  const { action } = lang.posts.preview;

  const { selectedPublication } = usePubContext();
  const { code: selectedCode } = selectedPublication;

  const publication = code ?? selectedCode;

  /* Queries */
  const {
    data: likeData,
    isError: isLikeError,
    isLoading: isLikeLoading,
  } = useLiked(publication);
  const count = useCountLikes(publication);

  /* Mutations */
  const likePostMutation = useLike(publication);
  const unlikePostMutation = useRemoveLike(publication);

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
