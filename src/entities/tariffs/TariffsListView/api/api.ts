import { api } from '~shared/api';

import { ApiResponseTariffsData } from './types';

import { routes } from './routes';

export const getTariffs = (cityId: any): any => {
  let response;

  try {
    response = api.get<any, ApiResponseTariffsData>(routes.getTariffs(cityId));
  } catch (error) {
    response = error;
  }

  return response;
};
