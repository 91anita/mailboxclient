import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
    selectedMessage: null,
    messages: []
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    openMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
    deleteMessage: (state, action) => {
      const messageId = action.payload;
      state.messages = state.messages.filter((message) => message.id !== messageId);
    },
    
  }
});

export const {
  openSendMessage,
  closeSendMessage,
  openMessage,
  deleteMessage
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMessage;
export const selectMessages = (state) => state.mail.messages;

export default mailSlice.reducer;
