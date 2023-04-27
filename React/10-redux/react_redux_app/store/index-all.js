import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true
};
const counterSlice = createSlice({
  // createSlice는 인자로 객체를 생성해야함. 반드시 네임 키와 초기값이 설정되어 있어야함. state 는 자동으로 가장 최신상태를 전달받음.
  name: 'counter',
  initialState : initialCounterState,
  // 오리지널 리덕스 함수에서는 모든 액션마다 기존 객체의 모든 값 대한 사항들을 적어야했지만 툴킷에서는 기존 상태가 변경되지 않도록 고정하면서 변경된 값에 대해서는 오버라이드를 해줌
  reducers: {
    // reducer 함수로 만들면 자동으로 메서드로 등록되기 때문에 액션 타입에 대한 오타를 방지할 수 있음! 액션마다 고유한 식별자는 툴킷이 내부적으로 부여하고 식별하기 때문에 액션 객체를 적어줄 필요가 없음.
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
});

const initialAuthState = {
  isAuthenticated: false
};
// toolkit을 사용하지 않았을 때에는 상태 객체를 아래와 같은 형식으로 변경하면 안됨! 툴킷에 의해서 언급된 속성만 변경되도록 보장되기 때문.
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

// 툴킷에서 저장소와 슬라이스를 연결하는 방법. 키가 reducer 임에 주의! -s 가 아님!
// slice는 여러 개가 있어도 리덕스 저장소는 한 개만 있기 때문에 configureStore는 한번만 호출해야함! -> 내부의 reducer는 인자로 함수를 받을 뿐만 아니라 맵의 역할로써 객체도 받기 때문에 slice가 여러 개일 경우 객체의 형태로 전달하면 됨!
// slice가 여러개 일때에는 컴포넌트에서 리듀서를 사용할 때 키 값과 함께 사용
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
})
// actions 는 액션 생성자 메서드 -> 리듀서 메서드로 같은 이름이 전달되면 액션 전달.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

/* const store = createStore(counterSlice.reducer); */
export default store;