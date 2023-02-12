import { useQuery } from '@tanstack/react-query';

import { request } from '@/utils/request';

const jokeApi = {
  async getRandomApi() {
    return request({ baseURL: 'https://v2.jokeapi.dev/joke/Any' }, false);
  },
};

export const useJokeQuery = () => {
  return useQuery(['joke'], () => jokeApi.getRandomApi());
};
