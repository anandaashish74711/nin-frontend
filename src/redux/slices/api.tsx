import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), 
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => '/patients',
    }),
    getPatientDetails: builder.query({
      query: (patientId) => `/patients/${patientId}`,
    }),
  }),
});

export const { useGetPatientsQuery, useGetPatientDetailsQuery } = patientApi;
