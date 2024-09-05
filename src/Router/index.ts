// @ts-ignore
import Home from '@/pages/Home/index.tsx';
import Editor from "../Pages/editor";

const routes = [
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/editor/:template',
    exact: true,
    component: Editor,
  },
];

export default routes;
