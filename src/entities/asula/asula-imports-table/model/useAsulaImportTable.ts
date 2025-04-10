import { useAtomValue, useResetAtom, useSetAtom } from '../../../../shared/lib/atom-state';

import { asulaImportTableList, setAsulaImportTableList } from './atoms';

export const useAsulaImportTableList = () => {
  return useAtomValue(asulaImportTableList);
};

export const useSetAsulaImportTableList = () => {
  return useSetAtom(setAsulaImportTableList);
};

export const useResetAsulaImportTableList = () => {
  return useResetAtom(asulaImportTableList);
};
