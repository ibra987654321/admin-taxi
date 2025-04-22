import { api } from '~shared/api';

import { routes } from './routes';

export const removeTariff = (id: string) => {
  let response: any;

  try {
    response = api.post<any, any>(routes.removeTariff(id));
  } catch (e) {
    response = { error: 'Ошибка' };
  }

  return response;
};
