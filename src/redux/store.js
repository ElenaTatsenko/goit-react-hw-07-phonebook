import { configureStore } from "@reduxjs/toolkit";
import { persistContactReducer } from "./contactsSlice";
import { filterSlice } from './filterSlice'
import { persistStore } from "redux-persist";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';



export const store = configureStore({
    reducer: {
        contacts: persistContactReducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)