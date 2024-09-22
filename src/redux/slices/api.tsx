


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/api' }), // Correct base URL
  endpoints: (builder) => ({
    // Update query to default to empty object if no argument is passed
    getPatients: builder.query({
      query: () => '/getallpatients',
    }),
    getPatientDetails: builder.query({
      query: (patientId) => `/patients/${patientId}`,
    }),
  }),
});

export const { useGetPatientsQuery, useGetPatientDetailsQuery } = patientApi;
