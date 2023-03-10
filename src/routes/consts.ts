import Examples from "../pages/examples/Examples";
import Home from "../pages/home/Home";
import Layout from "../components/Layout";
import Pin from "../pages/pin/Pin";

export const HOME_PATH = '/';
export const PIN_PATH = '/pin';
export const EXAMPLES_PATH = '/examples'

export const mainLayoutRoutes = {
  Layout: Layout,
  routes: [
    { path: HOME_PATH, Component: Home, title: 'Home' },
    { path: PIN_PATH, Component: Pin, title: 'Pin' },
    { path: EXAMPLES_PATH, Component: Examples, title: 'Examples'}
  ]
}