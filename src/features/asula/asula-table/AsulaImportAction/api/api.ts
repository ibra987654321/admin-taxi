import { AsulaImportTableItemType } from '~entities/asula/asula-imports-table';

import { ApiResponseData, api } from '../../../../../shared/api';

import { routes } from './routes';

import { ApiCreateAsulaImportResponse } from './types';

export const createAsulaImport = async (data: Partial<AsulaImportTableItemType>) => {
  let response;

  try {
    response = await api.post<any, ApiResponseData<ApiCreateAsulaImportResponse>>(
      routes.createAsulaImport(),
      data
    );
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
