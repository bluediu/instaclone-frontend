import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import routes from './routes';
import { map } from 'lodash';
import { Suspense } from 'react';
import Loader from '../components/Loader/Loader';

function Navigation() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {map(routes, (route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default Navigation;
