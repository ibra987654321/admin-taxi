import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import { asulaFormatAtoms, setAsulaFormatsAtom } from './atoms';

export const useAsulaFormats = () => {
  return useAtomValue(asulaFormatAtoms);
};

export const useSetAsulaFormats = () => {
  return useSetAtom(setAsulaFormatsAtom);
};

export const useResetAsulaFormats = () => {
  return useResetAtom(asulaFormatAtoms);
};
