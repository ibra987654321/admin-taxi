import { routes } from './routes';

export const getAsulaFormats = async () => {
  let response;

  try {
    response = await fetch(routes.getAsulaFormats()).then((response) => response.json());
  } catch (error: any) {
    response = error?.response?.data;
  }

  return response;
};
