import './ModalBasic.scss';
import { Modal } from 'semantic-ui-react';
function ModalBasic(props) {
  const { show, setShow, title, children } = props;

  const onClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal
        size="mini"
        open={show}
        onClose={onClose}
        className="modal-basic"
      >
        {title && <Modal.Header>{title}</Modal.Header>}

        {children}
      </Modal>
    </div>
  );
}

export default ModalBasic;
