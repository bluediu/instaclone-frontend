import { ReactElement } from 'react';

/* Components */
import { Modal } from 'semantic-ui-react';
import { ModalLayout } from '../../layouts';

/* Hooks */
import { useDeviceType } from '../../hooks';

/* Types */
import { TSize } from '../../types';

interface IProps {
  children: ReactElement | ReactElement[];
  padding: boolean;
  show: boolean;
  size?: TSize;
  title?: string | null;

  onClose: () => void;
}

export const ModalBasic = (props: IProps) => {
  const isTabletOrMobile = useDeviceType();

  const { children, show, title, size, padding = true, onClose } = props;

  return (
    <ModalLayout size={size} show={show} onClose={onClose}>
      <>
        {title && <Modal.Header className="text-center">{title}</Modal.Header>}
        <Modal.Content
          style={!padding ? { padding: '0' } : {}}
          scrolling={!isTabletOrMobile}
        >
          {children}
        </Modal.Content>
      </>
    </ModalLayout>
  );
};
