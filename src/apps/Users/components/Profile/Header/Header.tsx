/* Components */
import { Button, Icon } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../hooks';
import { useAddFollow, useIsFollowing, useUnfollow } from '../../../hooks';

import './Header.scss';

interface IProps {
  username: string;
  authUsername: string;
  onChangeProfile: () => void;
}

export const Header = (props: IProps) => {
  const { username, authUsername, onChangeProfile } = props;

  // Hooks
  const { data } = useUI();
  const { profile } = data;

  // Query
  const isFollowingQuery = useIsFollowing(username);

  // Mutations
  const addFollowMutation = useAddFollow(username);
  const unfollowMutation = useUnfollow(username);

  const followButton = () => {
    if (isFollowingQuery.isLoading) {
      return (
        <section>
          <Icon loading name="spinner" /> checking...
        </section>
      );
    }

    const { data } = isFollowingQuery;

    if (data!.is_following) {
      return (
        <Button
          content={profile.unfollow}
          size="tiny"
          loading={unfollowMutation.isPending}
          onClick={() => unfollowMutation.mutate()}
        />
      );
    } else {
      return (
        <Button
          content={profile.follow}
          size="tiny"
          primary
          loading={addFollowMutation.isPending}
          onClick={() => addFollowMutation.mutate()}
        />
      );
    }
  };

  return (
    <section className="header-profile">
      <span className="header-profile__text">{username}</span>

      {username === authUsername ? (
        <Button
          content={profile.settingAction}
          size="tiny"
          icon="setting"
          onClick={onChangeProfile}
        />
      ) : (
        followButton()
      )}
    </section>
  );
};
