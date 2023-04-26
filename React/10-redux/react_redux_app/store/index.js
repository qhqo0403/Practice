// 리액트 앱에서 리덕스를 실행하려면 npm install redux react-redux

import { configureStore, createSlice } from '@reduxjs/toolkit';
/* import { createStore } from 'redux'; */

const initialState = {
  counter: 0,
  showCounter: true
}
// 초기값을 객체로 만들어서 그 안에 값이 여러 개 있다면 각 액션에 따라서 값이 어떻게 변하는지 다 써줘야함! -> 리덕스가 변화된 부분만 자동으로 인지해서 객체를 병합해주는 것이 아니기 때문.
// 기존의 state 값을 변경하면 안되고 state를 기반으로 새로운 객체를 반환하여 재정의 해야함

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


/* const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      // 각 액션안에서는 초기 상태 객체의 값을 덮어쓰는 형식으로 이루어져야만 함 -> 내부에서 값의 변경을 불러 일으키는 코드는 쓰지 않는게 좋음! ( ex) 리턴 전에 state.counter++ 를 추가한다던지! )
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  };
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  };
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  };

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }


  return state;
}
const store = createStore(counterReducer);

*/