import { atomWithDefault } from 'jotai/utils';
import { atom } from 'jotai';

import { ApiAsulaFormats, getAsulaFormats } from '../api';

export const asulaFormatAtoms = atomWithDefault<ApiAsulaFormats | any>((_get) => null);

export const setAsulaFormatsAtom = atom(
  (get) => get(asulaFormatAtoms),
  async (_get, set) => {
    const response = await getAsulaFormats();
    set(asulaFormatAtoms, response);
  }
);
