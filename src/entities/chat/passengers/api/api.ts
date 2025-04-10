import { api } from '~shared/api';
import { routes } from '~entities/chat/passengers/api/routes';

export const getPassengersListView = () => {
  return api.get(routes.getPassengersListView());
};
