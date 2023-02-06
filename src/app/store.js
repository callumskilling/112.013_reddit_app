import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsListReducer from '../features/postsList/postsListSlice';

export default configureStore({
  reducer: combineReducers({
    postsList: postsListReducer,
  }),
});
