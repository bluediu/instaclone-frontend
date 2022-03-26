// Layouts
import { lazy } from 'react';
import LayoutBasic from '../layouts/LayoutBasic';

// Pages
const Home = lazy(() => import('../pages/Home'));
const User = lazy(() => import('../pages/User'));
const Error404 = lazy(() => import('../pages/Error404'));

const routes = [
  {
    path: '/',
    layout: LayoutBasic,
    component: Home,
    exact: true,
  },
  {
    path: '/:username',
    layout: LayoutBasic,
    component: User,
    exact: true,
  },
  {
    layout: LayoutBasic,
    component: Error404,
  },
];

export default routes;
