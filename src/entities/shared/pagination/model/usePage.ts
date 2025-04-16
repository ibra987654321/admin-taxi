import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { pageAtom, setPageAtom } from './atoms';

export const usePage = () => {
  return useAtomValue(pageAtom);
};

export const useSetPage = () => {
  return useSetAtom(setPageAtom);
};

export const useResetPage = () => {
  return useResetAtom(pageAtom);
};
