// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   
  
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages(state, action) {
      const { senderId, sender, messages } = action.payload;
      state.messagesBySender[senderId] = { sender, messages };
    },
    clearMessages(state) {
      state.messagesBySender = {};
    }
    // Add more reducers as needed
  }
});

export const { setMessages, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
