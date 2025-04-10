import { api } from '~shared/api';

import { routes } from './routes';

export const getDriversListView = () => {
  return api.get(routes.getDriversListView());
};
