import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsersData = createAsyncThunk(
    'users/fetchUsersData',
    async () => {
        const response = await axios.get(API)
        return response.data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {
        addUser: (state, action) => {
            state.users.unshift(action.payload)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersData.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchUsersData.fulfilled, (state, action) => {
                state.isLoading = false
                state.users = action.payload
            })
            .addCase(fetchUsersData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;