/* Layouts */
import { ModalLayout } from '../../../../../layouts';

/* Components */
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';

/* Hooks */
import { useDeviceType } from '../../../../../hooks';

/* Interfaces */
import { IPublication } from '../../../interfaces';

import './Modal.scss';

interface IProps {
  show: boolean;
  closeModal: () => void;
  publication: IPublication;
}

export const Modal = (props: IProps) => {
  const isTabletOrMobile = useDeviceType();

  const { show, closeModal, publication } = props;

  return (
    <div>
      <ModalLayout
        show={show}
        size="large"
        onClose={closeModal}
        className="modal-publication"
      >
        {isTabletOrMobile ? (
          <Mobile pub={publication} closeModal={closeModal} />
        ) : (
          <Desktop pub={publication} />
        )}
      </ModalLayout>
    </div>
  );
};
