import { useContext } from 'react';

/* Context */
import { AuthContext } from '../context';

export const useAuth = () => useContext(AuthContext);
