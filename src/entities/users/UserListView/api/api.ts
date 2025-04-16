import { api } from '~shared/api';

import { ApiResponseUsersData } from '~entities/users/UserListView/api/types';

import { routes } from './routes';

export const getUsers = (): any => {
  let response;

  try {
    response = api.get<any, ApiResponseUsersData>(routes.getUsers());
  } catch (error) {
    response = error;
  }

  return response;
};
