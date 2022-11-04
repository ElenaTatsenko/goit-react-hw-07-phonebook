import { configureStore } from "@reduxjs/toolkit";
import { persistContactReducer } from "./contactsSlice";
import { filterSlice } from './filterSlice'

export const store = configureStore({
    reducer: {
        contacts: persistContactReducer,
        filter: filterSlice.reducer,
    },
  
});


