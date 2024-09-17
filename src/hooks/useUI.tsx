import { useContext } from 'react';

/* Context */
import { UIContext } from '../context/UIContext';

export const useUI = () => useContext(UIContext);
