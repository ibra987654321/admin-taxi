import { api } from '~shared/api';

import { ApiResponseTariffsData } from './types';

import { routes } from './routes';

export const getTariffs = (): any => {
  let response;

  try {
    response = api.get<any, ApiResponseTariffsData>(routes.getTariffs());
  } catch (error) {
    response = error;
  }

  return response;
};
