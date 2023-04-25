import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // 컴포넌트를 저장소와 연결해서 데이터를 받을 수 있게 해주는 메서드, 인자로 함수를 받으며 함수는 리덕스에 의해 실행됨.
  // 저장소 내의 데이터가 변경되면 최신 값을 받음과 동시에 함수 컴포넌트가 재실행 되서 state 가 항상 최신 상태로 유지됨
  const counter = useSelector(state => state.counter);
  // 저장소에 액션을 유발하는 훅, 정의할 때 인자를 받지 않고 사용할 때 인자를 전달한다.
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
