/* Components */
import { Button } from 'semantic-ui-react';

/* Hooks */
import { useUI } from '../../../../../hooks';

/* Types */
import { TranslationType } from '../../../../../types';

import './Header.scss';

interface IProps {
  username: string;
  authUsername: string;
  onChangeProfile: () => void;
}

export const Header = (props: IProps) => {
  const { data } = useUI();
  const { profile } = data as TranslationType;

  const { username, authUsername, onChangeProfile } = props;

  const isFollow = true;

  const followBtn = () => {
    if (isFollow) return <Button content="Follow" size="tiny" primary />;
    else return <Button content="Unfollow" size="tiny" />;
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
        followBtn()
      )}
    </section>
  );
};
