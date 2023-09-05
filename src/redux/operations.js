import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://64eb12d7e51e1e82c576f8a0.mockapi.io";


export const getContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const createContact = createAsyncThunk('contacts/createContact', async ({name, phone}, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', { name, phone });
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
