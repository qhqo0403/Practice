// ui 와 관련된 슬라이스
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {cartIsVisible: false},
  reducers: {
    // 메서드는 state를 인수로 받아야함!
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;