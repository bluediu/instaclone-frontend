/* Core */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/* Libs */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/* Context */
import { UIProvider } from './context';
import { PublicationProvider } from './apps/Posts/context';
import { AuthProvider } from './apps/Users/context';

/* Styles */
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UIProvider>
        <AuthProvider>
          <PublicationProvider>
            <App />
          </PublicationProvider>
        </AuthProvider>
      </UIProvider>
    </QueryClientProvider>
  </StrictMode>
);
