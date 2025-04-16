import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { setUsersList, usersList, usersPagination } from '~entities/users/UserListView/model/atoms';

export const useUsersPagination = () => {
  return useAtomValue(usersPagination);
};

export const useUsersList = () => {
  return useAtomValue(usersList);
};

export const useSetUsersList = () => {
  return useSetAtom(setUsersList);
};

export const useResetUsersList = () => {
  return useResetAtom(usersList);
};
