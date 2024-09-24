import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/api' }), 
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => '/getallpatients',
    }),
    getPatientDetails: builder.query({
      query: (ehrId) => `/getvisitsbypatientid?ehrId=${ehrId}`,
    }),
    getvisitWiseData: builder.query({
      query:(compositionId)=>`/getallClinicalData?compositionUid=${compositionId}`,
    })
  }),
});

export const { useGetPatientsQuery, useGetPatientDetailsQuery } = patientApi;
