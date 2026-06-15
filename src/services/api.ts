import axios, { type AxiosError, type AxiosResponse } from 'axios';

import { API_CONFIG } from '@/constants/config';
import { ApiError } from '@/types';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ error?: string }>) => {
    if (!error.response) {
      return Promise.reject(new ApiError('Network error — check your connection', 0));
    }

    const { status, data } = error.response;
    const message = data?.error ?? error.message ?? 'Something went wrong';

    return Promise.reject(new ApiError(message, status));
  },
);

export default api;
