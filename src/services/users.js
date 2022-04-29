import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// https://redux-toolkit.js.org/tutorials/rtk-query
// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    listUsers: builder.query({
      query: (page = 1) => `users?page=${page}&delay=1`,
    }),
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    // deleteUser should be rewritten as mutation
    deleteUser: builder.query({
      query: (id) => ({
        url: `users/${id}?delay=3`,
        method: 'POST',
      }),
    }),
  }), 
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListUsersQuery, useGetUserQuery} = usersApi