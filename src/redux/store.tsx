import { configureStore } from '@reduxjs/toolkit';
import { patientApi } from './slices/api';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [patientApi.reducerPath]: patientApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patientApi.middleware),
});
