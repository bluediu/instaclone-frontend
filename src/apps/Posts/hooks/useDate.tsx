/* Libs */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Load the relativeTime plugin
dayjs.extend(relativeTime);

export const useDate = () => {
  return { dayjs };
};
