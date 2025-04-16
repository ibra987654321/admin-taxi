import axios from 'axios';

import { defaultLocale } from '~shared/lib/l10n';

import { ApiRequestConfig } from '~shared/api/types';

import { errorHandler, requestHandler, responseHandler } from './interceptors';

export const apiWithAuth = axios.create({
  // withCredentials: import.meta.env.DEV ? true : false,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': defaultLocale,
  },
});
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': defaultLocale,
  },
});

// api.interceptors.request.use((config: ApiRequestConfig) => {
//   const rawToken = localStorage.getItem('taxi-token');
//   const token = rawToken?.replace(/^"|"$/g, '');
//   const headers = config.headers || {};
//
//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }
//
//   return config;
// });

export const apiRequestInterceptor = api.interceptors.request.use(requestHandler);
export const apiResponseInterceptor = api.interceptors.response.use(responseHandler, errorHandler);
