import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './features/homeSlice';
import wordSlice from './features/wordSlice';
import pointSlice from './features/pointSlice';

/* 

Combine reducers for homeSlice, wordSlice, and pointSlice.
Each slice manages a specific part of your application's state.

 */
export default configureStore({
  reducer: {
    homeSlice,  
    wordSlice,  
    pointSlice,
  }
});
