// store.js
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer
    // Add more reducers if needed
  }
});

export default store;
