// import viteLogo from '/vite.svg'
/* Components */
import { ToastContainer } from 'react-toastify';

/* Pages */
import { AuthPage } from './apps/Users/pages';

/* Hooks */
import { useAuth } from './apps/Users/hooks';

function App() {
  const { auth } = useAuth();

  return (
    <>
      {auth === undefined ? <AuthPage /> : <h1>HOLA</h1>}
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
