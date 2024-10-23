/* Components */
import { Followers, Following } from './Items';
import { ModalBasic } from '../../../../../shared';

/* Hooks */
import { useFollowCount } from '../../../hooks';
import { useModal, useUI } from '../../../../../hooks';

import './Relations.scss';

interface IProps {
  username: string;
  totalPubs: number;
}

export const Relations = ({ username, totalPubs }: IProps) => {
  const { data: lang } = useUI();
  const { profile } = lang;

  const { data, isLoading, isError } = useFollowCount(username);

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal 
  } = useModal();

  const handleFollowers = () => {
    openModal(profile.modal.followers, <Followers username={username} />);
  };

  const handleFollowing = () => {
    openModal(profile.modal.following, <Following username={username} />);
  };

  return (
    <>
      <section className="relations">
        <p>
          <b>{totalPubs ?? '--'}</b> {profile.count.post}
        </p>
        <p onClick={handleFollowers} className="cursor-pointer">
          <b>{isLoading || isError ? '--' : data?.followers_count}</b>{' '}
          {profile.count.followers}
        </p>
        <p onClick={handleFollowing} className="cursor-pointer">
          <b>{isLoading || isError ? '--' : data?.following_count}</b>{' '}
          {profile.count.following}
        </p>
      </section>

      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        padding={false}
        size={'mini'}
        children={modalContent ?? <span>No content</span>}
      />
    </>
  );
};
