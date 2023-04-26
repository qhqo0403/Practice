import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
}
const counterSlice = createSlice({
  // 반드시 네임 키와 초기값이 설정되어 있어야함. state 는 자동으로 가장 최신상태를 전달받음.
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;

/* const store = createStore(counterSlice.reducer); */
export default store;