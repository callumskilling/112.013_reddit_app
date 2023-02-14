import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllPosts = createAsyncThunk(
  'postsList/loadAllPosts',
  async (currentSubreddit) => {
    const response = await fetch(`https://www.reddit.com/${currentSubreddit}.json`);
    const json = await response.json();
    const postData = json.data.children.map((post) => post.data);
    return postData;
  }
);

export const postsListSlice = createSlice({
  name: 'postsList',
  initialState: {
    posts: [],
    isLoadingPostsList: false,
    hasError: false,
    currentSubreddit: "r/popular"
  },
  reducers: {
    updateCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPosts.pending, (state) => {
        state.isLoadingPostsList = true;
        state.hasError = false;
      })
      .addCase(loadAllPosts.fulfilled, (state, action) => {
        state.isLoadingPostsList = false;
        state.posts = action.payload;
      })
      .addCase(loadAllPosts.rejected, (state) => {
        state.isLoadingPostsList = false;
        state.hasError = true;
        state.posts = [];
      })
  },
});

export const selectAllPosts = (state) => state.postsList.posts;

export const selectCurrentSubreddit = (state) => state.postsList.currentSubreddit

export const isLoading = (state) => state.postsList.isLoadingPostsList;

export default postsListSlice.reducer;