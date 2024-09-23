// import viteLogo from '/vite.svg'
/* Components */
import Navigation from './routes/Navigation';
import { ToastContainer } from 'react-toastify';

/* Pages */
import { AuthPage } from './apps/Users/pages';

/* Hooks */
import { useAuth } from './apps/Users/hooks';

function App() {
  const { auth } = useAuth();

  return (
    <>
      {auth === undefined ? <AuthPage /> : <Navigation />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
