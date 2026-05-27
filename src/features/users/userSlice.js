import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {  
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export default userSlice.reducer;