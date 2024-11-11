/* Components */
import { Icon, Modal } from 'semantic-ui-react';
import { ModalLayout } from '../../layouts';

/* Hooks */
import { useDeviceType } from '../../hooks';

/* Interfaces */
import { IReactNodeProps } from '../../interfaces';

/* Types */
import { TSize } from '../../types';

interface IProps extends IReactNodeProps {
  padding: boolean;
  show: boolean;
  size?: TSize;
  title?: string | null;
  showCloseButton?: boolean;

  onClose: () => void;
}

export const ModalBasic = (props: IProps) => {
  const isTabletOrMobile = useDeviceType();

  const {
    children,
    show,
    title,
    size,
    padding = true,
    showCloseButton = false,
    onClose,
  } = props;

  return (
    <ModalLayout size={size} show={show} onClose={onClose}>
      <>
        {title && (
          <Modal.Header className="text-center">
            {showCloseButton ? (
              <section className="d-flex align-items-center justify-content-between">
                <div>
                  <Icon
                    name="angle left"
                    size="large"
                    className="cursor-pointer"
                    onClick={onClose}
                  />
                </div>
                <div>{title}</div>
                <div></div>
              </section>
            ) : (
              <span>{title}</span>
            )}
          </Modal.Header>
        )}
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
