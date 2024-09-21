import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3002/api' }), 
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => 'endpoint',
    }),
    getPatientDetails: builder.query({
      query: (patientId) => `/patients/${patientId}`,
    }),
  }),
});

export const { useGetPatientsQuery, useGetPatientDetailsQuery } = patientApi;
