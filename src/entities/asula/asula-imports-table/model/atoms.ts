import { AsulaImportTableDataType, AsulaImportTableRequest, getAsulaImports } from '../api';

import { atom, atomWithDefault } from '../../../../shared/lib/atom-state';

export const asulaImportTableList = atomWithDefault<AsulaImportTableDataType | null>(
  (_get) => null
);
export const setAsulaImportTableList = atom<
  AsulaImportTableDataType | null,
  AsulaImportTableRequest,
  Promise<void>
>(
  (get) => get(asulaImportTableList),
  async (_get, set, { page, limit }) => {
    const response = await getAsulaImports({ page, limit });
    const data = response.data;
    set(asulaImportTableList, data);
  }
);
