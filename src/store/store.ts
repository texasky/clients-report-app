import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from '../features/clients/clientsSlice';
import {clientsApi} from "../services/clients";
import searchReducer from "../features/clients/searchSlice";
import reportsReducer from "../features/reports/reportsSlice";

export const store = configureStore({
    reducer: {
        clients: clientsReducer,
        search: searchReducer,
        reports: reportsReducer,
        [clientsApi.reducerPath]: clientsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false,}).concat(clientsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch