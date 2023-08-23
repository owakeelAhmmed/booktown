import { api } from '@/redux/api/apiSlice';

const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query({
      query: (query) => `/search?q=${query}`,
    }),
  }),
});

export const { useSearchQuery } = searchApi;
