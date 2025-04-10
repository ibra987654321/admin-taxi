import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { driversList, setDriversList } from './atoms';

export const useDriversList = () => {
  return useAtomValue(driversList);
};

export const useSetDriversList = () => {
  return useSetAtom(setDriversList);
};

export const useResetDriversList = () => {
  return useResetAtom(driversList);
};
