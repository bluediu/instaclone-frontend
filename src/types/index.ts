import { translation } from '../context/lang';

export type TranslationType = (typeof translation)['en'];
export type TLang = 'en' | 'es';
export type TSize = 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';
