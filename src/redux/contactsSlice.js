import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { fetchContacts, addContact, deleteContact } from "./operations";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = true;
            state.items = action.payload;
        },
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.find(
                contact =>
                    action.payload.name.toLowerCase() === contact.name.toLowerCase()) ?
                alert(`${action.payload.name} is already in contacts.`)
                : state.items.push({
                    id: nanoid(),
                    name: action.payload.name,
                    number: action.payload.number,
                })
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});


       
       
const persistConfig = {
    key: 'contacts',
    storage
};

export const persistContactReducer = persistReducer(persistConfig, contactsSlice.reducer);

