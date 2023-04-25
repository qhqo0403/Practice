// 리액트 앱에서 리덕스를 실행하려면 npm install redux react-redux

import { createStore } from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  };
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  };
  return state;
}

const store = createStore(counterReducer);

export default store;