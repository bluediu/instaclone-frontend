/* Components */
import { CommentGroup } from 'semantic-ui-react';

/* Interfaces */
import { IReactNodeProps } from '../../../../../interfaces';

export const CommentsWrapper = ({ children }: IReactNodeProps) => {
  return (
    <CommentGroup
      size="small"
      className="ml-3 h-100"
      style={{ overflowY: 'auto' }}
    >
      {children}
    </CommentGroup>
  );
};
