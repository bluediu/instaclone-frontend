/* Libs */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

/* Hooks */
import { useUI } from '../../../hooks';

import 'dayjs/locale/es';

// Load the relativeTime plugin
dayjs.extend(relativeTime);

export const useDate = () => {
  const { lang } = useUI();

  // Set the locale to Spanish or English
  dayjs.locale(lang);

  return { dayjs };
};
