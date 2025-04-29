import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { setTariffCitiesList, tariffCitiesList } from './atoms';

export const useTariffCitiesList = () => {
  return useAtomValue(tariffCitiesList);
};

export const useSetTariffCitiesList = () => {
  return useSetAtom(setTariffCitiesList);
};

export const useResetTariffCitiesList = () => {
  return useResetAtom(tariffCitiesList);
};
