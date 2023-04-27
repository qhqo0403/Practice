
import { useDispatch, useSelector} from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
/* import { counterActions } from '../store'; */

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment()); // 메서드를 전달하면 같은 이름을 가진 메서드로 액션이 전달됨
  }
  const increaseHander = () => {
    dispatch(counterActions.increase(5));  // 전달되는 값은 내부적으로 payload 속성에 저장되서 전달됨. payload는 정해진 이름임
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHander}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


