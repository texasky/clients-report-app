import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clientsApi = createApi({
    reducerPath: 'clientsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
    endpoints: (builder) => ({
        getClients: builder.query<string, void>({
            query: () => `clients`,
        }),
        getReports: builder.query<string, void>({
            query: () => `reports`,
        }),
    }),
})

export const { useGetClientsQuery, useGetReportsQuery } = clientsApi;