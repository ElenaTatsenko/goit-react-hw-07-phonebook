import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
        
    reducers: {
        addContact(state, action) {
            state.contacts.find(
                contact =>
                    action.payload.name.toLowerCase() === contact.name.toLowerCase()) ?
                        alert(`${action.payload.name} is already in contacts.`)
                        : state.contacts.push({
                            id: nanoid(),
                            name: action.payload.name,
                            number: action.payload.number,
                        })        
               
        },
        deleteContact(state, action) {
          state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
      
        },
        
                  
    }
})
const persistConfig = {
    key: 'contacts',
    storage
};

export const persistContactReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;
