import { useState } from 'react';

export const useBasicModal = () => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const closeModal = () => setShow(false);

  return {
    show,
    showModal,
    closeModal,
  };
};
