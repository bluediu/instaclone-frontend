/* Components */
import {
  CommentForm,
  Comments,
  CommentsWrapper,
} from '@/apps/Posts/components/Comments';

interface IProps {
  publication: string;
}

export const MobileComments = ({ publication }: IProps) => {
  return (
    <section>
      <CommentsWrapper>
        <Comments publication={publication} />
      </CommentsWrapper>
      <CommentForm />
    </section>
  );
};
