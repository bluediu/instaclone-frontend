import { lazy } from 'react';

/* Layouts */
import { BasicLayout } from '../layouts';

/* Pages */
const HomePage = lazy(() => import('../apps/Users/pages/HomePage'));
const ProfilePage = lazy(() => import('../apps/Users/pages/ProfilePage'));
const Error404 = lazy(() => import('../apps/UI/pages/Error404'));

/* Interfaces */
import { IRoute } from '../interfaces';

/* Constants */
import { usersPath } from '../apps/Users/constants';

const routes: IRoute[] = [
  {
    path: usersPath.HOME,
    layout: BasicLayout,
    component: HomePage,
  },
  {
    path: usersPath.PROFILE,
    layout: BasicLayout,
    component: ProfilePage,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: Error404,
  },
];

export default routes;
