import { api } from '~shared/api';
import { routes } from '~features/users/edit/api/routes';

export const editUser = () => {
  let response: any;

  try {
    response = api.put(routes.editUser());
  } catch (e: any) {
    response = e.message;
  }

  return response;
};
