import { useContext } from 'react';

/* Context */
import { PublicationContext } from '../context';

export const usePubContext = () => useContext(PublicationContext);
