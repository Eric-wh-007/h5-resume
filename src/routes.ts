import { Head, Introduction, WorkExp, ProjectExp } from './pages';
import { RouteConfig } from './interfaces';
const routes: RouteConfig[]  = [
  {
    path: '/',
    Component: Head,
    exact: true,
  },
  {
    path: '/introduction',
    Component: Introduction,
  },
  {
    path: '/workExp',
    Component: WorkExp,
  },
  {
    path: '/projectExp',
    Component: ProjectExp,
  }
]
export default routes;