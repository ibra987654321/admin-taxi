import { useAtomValue, useResetAtom, useSetAtom } from '~shared/lib/atom-state';

import { perPageAtom, setPerPageAtom } from './atoms';

export const usePerPage = () => {
  return useAtomValue(perPageAtom);
};

export const useSetPerPage = () => {
  return useSetAtom(setPerPageAtom);
};

// export const useResetPerPage = () => {
//   return useResetAtom(perPageAtom);
// };
