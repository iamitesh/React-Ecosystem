import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response)
    const data = await response.data.slice(1, 10);
    return data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    // old syntax for extra reducer
    //   extraReducers: {
    //     [fetchPosts.pending]: (state) => {
    //       state.loading = true;
    //     },
    //     [fetchPosts.fulfilled]: (state, action) => {
    //       state.loading = false;
    //       state.posts = action.payload;
    //     },
    //     [fetchPosts.rejected]: (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     },
    //   },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;
