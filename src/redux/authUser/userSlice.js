import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const { token: { token } } = getState()
            console.log(token)
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUser: build.query({
            query: () => '/users/current',
            providesTags: ['User'],
        }),
        addUser: build.mutation({
            query: (credentials) => ({
                url: `/users/signup`,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User']
        }),
        loginUser: build.mutation({
            query: (credentials) => ({
                url: `/users/login`,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User']
        }),
        logOutUser: build.mutation({
            query: () => ({
                url: `/users/logout`,
                method: 'POST',
            }),
            invalidatesTags: ['User']
        }),
    }),
});

export const { useGetUserQuery, useAddUserMutation, useLoginUserMutation, useLogOutUserMutation } = userApi;