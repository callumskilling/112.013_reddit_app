import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsListReducer from '../features/postsList/postsListSlice';
import commentsListReducer from '../features/commentsList/commentsListSlice'

export default configureStore({
  reducer: combineReducers({
    postsList: postsListReducer,
    commentsList: commentsListReducer,
  }),
});
