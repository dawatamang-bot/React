import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/constants';



export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({


    getPosts: builder.query({
      query: (query) => ({
        url: '/users',
        method: 'GET'
      }),

    }),

    // addUser: builder.mutation({
    //   query: (q) => ({
    //     url: '/users',
    //     body: q,
    //     method: 'POST'
    //   })
  })



}),





});



export const { useGetUsersQuery, useAddUserMutation } = userApi;