import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllComments = createAsyncThunk(
  'commentsList/loadAllComments',
  async (currentPost) => {
    const response = await fetch(`${currentPost}.json`);
    const json = await response.json();
    const commentsData = json[1].data.children.map((reply) => reply.data)
    return commentsData;
  }
);

export const commentsListSlice = createSlice({
  name: 'commentsList',
  initialState: {
    comments: [],
    isLoadingCommentsList: false,
    hasError: false,
    currentPost: ""
  },
  reducers: {
    updateCurrentPost: (state, action) => {
      state.currentPost = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllComments.pending, (state) => {
        state.isLoadingCommentsList = true;
        state.hasError = false;
      })
      .addCase(loadAllComments.fulfilled, (state, action) => {
        state.isLoadingCommentsList = false;
        state.comments = action.payload;
      })
      .addCase(loadAllComments.rejected, (state) => {
        state.isLoadingCommentsList = false;
        state.hasError = true;
        state.comments = [];
      })
  },
});

export const selectAllComments = (state) => state.commentsList.comments;

export const selectCurrentPost = (state) => state.commentsList.currentPost

export const isLoading = (state) => state.commentsList.isLoading;

export default commentsListSlice.reducer;