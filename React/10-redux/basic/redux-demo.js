// npm init
// npm install redux

// node에서 3자 라이브러리를 임포트 하는 방법. rudux 객체를 생성하는 방식임
const redux = require('redux');
// 리듀서 함수로 상태와 액션을 매개변수로 받음. 저장소가 초기화 될 때 리덕스가 리듀서 함수를 처음 한번 실행하는데 이전 값에 대한 정의(초기값)이 있어야함!
const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  };
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  };
  return state;
};
// 저장소 생성하고 리듀서 함수와 연결(저장소와 데이터로 작업하는것은 리듀서 함수기 때문에 연결해줘야함)
const store = redux.createStore(counterReducer);
// 저장소를 구독하는 컴포넌트! 
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}
// 저장소에게 구독하는 컴포넌트 알려주기
store.subscribe(counterSubscriber);
// 저장소에 액션 보내는 메서드. 식별자 역할을 하는 객체를 포함함.
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});