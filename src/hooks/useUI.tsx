import { useContext } from 'react';

/* Context */
import { UIContext } from '../context/UIContext';

/* Types */
import { TranslationType } from '../types';

export const useUI = () => {
  const { lang, changeLang, data } = useContext(UIContext);

  return { lang, changeLang, data: data as TranslationType };
};
