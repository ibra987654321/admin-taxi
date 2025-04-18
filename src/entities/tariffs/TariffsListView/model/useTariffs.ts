import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { setTariffsList, tariffsList, tariffsPagination } from './atoms';

export const useTariffsPagination = () => {
  return useAtomValue(tariffsPagination);
};

export const useTariffsList = () => {
  return useAtomValue(tariffsList);
};

export const useSetTariffsList = () => {
  return useSetAtom(setTariffsList);
};

export const useResetTariffsList = () => {
  return useResetAtom(tariffsList);
};
