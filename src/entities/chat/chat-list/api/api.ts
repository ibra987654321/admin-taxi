import { api } from '~shared/api';

import { routes } from './routes';

export const getChatListView = () => {
  return api.get(routes.getChatListView());
};
