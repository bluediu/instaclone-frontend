/* Layouts */
import { ModalLayout } from '../../../../../layouts';

/* Components */
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';

/* Hooks */
import { usePubContext } from '../../../hooks';
import { useDeviceType } from '../../../../../hooks';

import './Modal.scss';

export const Modal = () => {
  const isTabletOrMobile = useDeviceType();

  const { isModalOpen, closePublicationModal } = usePubContext();

  return (
    <div>
      <ModalLayout
        show={isModalOpen}
        size="large"
        onClose={closePublicationModal}
        className="modal-publication"
      >
        {isTabletOrMobile ? <Mobile /> : <Desktop />}
      </ModalLayout>
    </div>
  );
};
