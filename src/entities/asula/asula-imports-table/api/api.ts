// @ts-ignore
import { ApiResponseData, api } from '~shared/api';

import { routes } from './routes';
import { AsulaImportTableDataType, AsulaImportTableRequest } from './types';

export const getAsulaImports = ({ page, limit }: AsulaImportTableRequest) => {
  let response;

  try {
    response = api.get<any, ApiResponseData<AsulaImportTableDataType>>(routes.getAsulaImports(), {
      params: { page, limit },
    });
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
