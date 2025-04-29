import { api } from '~shared/api';

import { routes } from './routes';

export const getTariffCities = () => {
  return api.get(routes.getCity());
};
