import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { IPage, IPerPage } from './types';

export const pageAtom = atomWithDefault<IPage>((_get) => 1);
export const perPageAtom = atomWithDefault<IPerPage>((_get) => 8);

export const setPageAtom = atom(
  (get) => get(pageAtom),
  async (_get, set, value: IPage) => set(pageAtom, value)
);

export const setPerPageAtom = atom(
  (get) => get(perPageAtom),
  async (_get, set, value: IPage) => set(perPageAtom, value)
);
