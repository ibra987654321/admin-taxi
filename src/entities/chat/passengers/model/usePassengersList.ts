import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { passengersList, setPassengersList } from './atoms';

export const usePassengersList = () => {
  return useAtomValue(passengersList);
};

export const useSetPassengersList = () => {
  return useSetAtom(setPassengersList);
};

export const useResetPassengersList = () => {
  return useResetAtom(passengersList);
};
