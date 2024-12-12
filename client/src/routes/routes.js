import config from '~/config';
import Home from '~/pages/Home';
import News from '~/pages/News';

// don't need to login
const publicRouters = [
  {
    path: config.home,
    component: Home,
  },
  {
    path: config.news,
    component: News,
  }
];
const privateRouters = [];

export { publicRouters, privateRouters };
