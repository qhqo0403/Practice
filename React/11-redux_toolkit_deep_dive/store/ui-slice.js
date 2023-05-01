// ui 와 관련된 슬라이스
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {cartIsVisible: false, notification: null},
  reducers: {
    // 메서드는 state를 인수로 받아야함!
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;