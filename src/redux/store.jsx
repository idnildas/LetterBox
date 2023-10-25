import { configureStore } from '@reduxjs/toolkit';
import homeSlice from "./features/homeSlice";
import wordSlice from './features/wordSlice';
import pointSlice from './features/pointSlice';
export default configureStore({
  reducer: {
    homeSlice,
    wordSlice,
    pointSlice
  }
})