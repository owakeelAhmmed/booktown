import { api } from '@/redux/api/apiSlice';

const addbookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBook: builder.mutation({
      query: (data) => ({
        url: 'product/', // Update the URL endpoint as needed
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostBookMutation } = addbookApi;
