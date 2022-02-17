import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { Icon } from 'semantic-ui-react';
import {
  ADD_LIKE,
  IS_LIKE,
  DELETE_LIKE,
  COUNT_LIKES,
} from '../../../../gql/like';
import './Actions.scss';

function Actions({ publication }) {
  const [loadingAction, setLoadingAction] = useState(false);
  /* mutations */
  const [addLike] = useMutation(ADD_LIKE);
  const [deleteLike] = useMutation(DELETE_LIKE);
  /* queries */
  const { data, loading, refetch } = useQuery(IS_LIKE, {
    variables: { idPublication: publication.id },
  });
  
  const {
    data: dataCount,
    loading: loadingCount,
    refetch: refetchCount,
  } = useQuery(COUNT_LIKES, {
    variables: { idPublication: publication.id },
  });

  const onAddLike = async () => {
    setLoadingAction(true);
    try {
      await addLike({
        variables: { idPublication: publication.id },
      });
      refetch();
      refetchCount();
    } catch (error) {
      console.error(error);
    }
    setLoadingAction(false);
  };

  const onDeleteLike = async () => {
    setLoadingAction(true);
    try {
      await deleteLike({
        variables: { idPublication: publication.id },
      });

      refetch();
      refetchCount();
    } catch (error) {
      console.error(error);
    }
    setLoadingAction(false);
  };

  const onAction = () => {
    if (!loadingAction) {
      if (isLike) {
        onDeleteLike();
      } else {
        onAddLike();
      }
    }
  };

  if (loading || loadingCount) return null;

  const { isLike } = data;
  const { countLikes } = dataCount;

  return (
    <div className="action">
      <Icon
        className={isLike ? 'like active' : 'like'}
        name={isLike ? 'heart' : 'heart outline'}
        onClick={onAction}
      />
      <span>
        {countLikes} {countLikes === 1 ? 'like' : 'likes'}
      </span>
    </div>
  );
}

export default Actions;
