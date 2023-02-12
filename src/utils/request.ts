import type {
  AxiosDefaults,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API}`,
});

/**
 *
 * @param {options} : { url, method, params }
 * @param {isAuth} : check whether should use token or not
 * @returns
 */

export const request = async (
  { ...options }: AxiosRequestConfig<AxiosDefaults>,
  auth: boolean
) => {
  if (auth) {
    client.interceptors.request.use(
      async (config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
        // Handle logic access token here, to request to server here
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    client.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response && response.data) {
          return response.data;
        }
        return response;
      },
      (error) => {
        if (typeof window === 'undefined') {
          throw error;
        }
        return Promise.reject(error);
      }
    );
  }

  try {
    const res = await client(options);
    return res;
  } catch (err: any) {
    return err?.response;
  }
};
