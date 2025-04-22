import { api } from '~shared/api';

import { TariffFormValues } from '~features/tariffs/addTariff/api/types';

import { routes } from './routes';

export const addTariff = (data: TariffFormValues) => {
  console.log(data);
  let response: any;

  try {
    response = api.post<any, any>(routes.addTariff(), data);
  } catch (e) {
    response = { error: 'Ошибка' };
  }

  return response;
};
