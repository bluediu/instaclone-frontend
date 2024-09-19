import { createContext, useMemo, useState } from 'react';

/* Constants */
import { LANG } from '../constants';

/* Types */
import { TLang } from '../types';

/* Data */
import { translation } from './lang';

interface TranslationData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface UIContextType {
  lang: TLang;
  data: TranslationData;
  changeLang: (lang: TLang) => void;
}

export const UIContext = createContext<UIContextType>({
  lang: 'en',
  data: translation['en'],
  changeLang: () => {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const UIProvider: TProviderChildren = ({ children }) => {
  const choiceLang = localStorage.getItem(LANG) as TLang;

  const [lang, setLang] = useState<TLang>(choiceLang ?? 'en');

  const changeLang = (newLang: TLang) => {
    if (newLang === lang) return;

    localStorage.setItem(LANG, newLang);
    setLang(newLang);
  };

  // Memoize the context value based on the current language
  const value: UIContextType = useMemo(
    () => ({
      lang,
      changeLang,
      // Fallback to 'en' if lang is missing
      data: translation[lang] || translation['en'],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
