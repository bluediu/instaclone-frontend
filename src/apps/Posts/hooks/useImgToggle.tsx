import { useState } from 'react';

export const useImgToggle = () => {
  const [toggleImageSize, setToggleImageSize] = useState(true);

  const handleToggleSize = () => setToggleImageSize(!toggleImageSize);

  return {
    toggleImageSize,
    handleToggleSize,
  };
};
