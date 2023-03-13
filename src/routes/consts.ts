import AuthLayouts from "../components/layouts/AuthLayouts";
import Examples from "../pages/examples/Examples";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MainLayout from "../components/layouts/MainLayout";
import Pin from "../pages/pin/Pin";

export const HOME_PATH = '/';
export const PIN_PATH = '/pin';
export const EXAMPLES_PATH = '/examples';

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home, title: 'Home' },
    { path: PIN_PATH, Component: Pin, title: 'Pin' },
    { path: EXAMPLES_PATH, Component: Examples, title: 'Examples' }
  ]
}

export const LOGIN_PATH = '/';

export const authLayoutRoutes = {
  Layout: AuthLayouts,
  routes: [
    { path: LOGIN_PATH, Component: Login, title: 'login'}
  ]
}