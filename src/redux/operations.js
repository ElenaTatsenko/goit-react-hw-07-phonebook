import { createAsyncThunk } from "@reduxjs/toolkit";


const baseURL = 'https://6362343666f75177ea292344.mockapi.io/contacts';


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch.get(baseURL);
        const contacts = await response.json();
 
        return contacts;
    }
    catch (error) {
        return rejectWithValue(error.mesage);
    }
}
 );

export const addContact = createAsyncThunk('contacts/addContact', async (data, { rejectWithValue }) => {
    try {
        const response = await fetch.post(baseURL, data);
        const contacts = await response.json();
        return contacts.data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
}
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, { rejectWithValue }) => {
    try {
        const response = await fetch.delete(`/contacts/${contactId}`);
        const contacts = await response.json();
        return contacts.data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);