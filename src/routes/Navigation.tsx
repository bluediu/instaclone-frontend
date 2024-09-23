import { Suspense } from 'react';

import routes from './routes';

/* Components */
import { Loader } from '../apps/UI/components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Interfaces */
import { IRoute } from '../interfaces';

function Navigation() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          {routes.map((route: IRoute, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Navigation;
