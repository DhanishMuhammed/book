import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../featurs/books/BookSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
