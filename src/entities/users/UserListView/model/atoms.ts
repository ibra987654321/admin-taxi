import { atom, atomWithDefault } from '~shared/lib/atom-state';
import { IMetaUsers, IUser, getUsers } from '~entities/users/UserListView/api';

export const usersList = atomWithDefault<IUser[] | null>((_get) => null);
export const usersPagination = atomWithDefault<IMetaUsers | null>((_get) => null);

export const setUsersList = atom<IUser[] | null, any, Promise<void>>(
  (get) => get(usersList),
  async (_get, set) => {
    const response = await getUsers();
    set(usersList, response.data.passengers);
    set(usersPagination, response.data.meta);
  }
);
