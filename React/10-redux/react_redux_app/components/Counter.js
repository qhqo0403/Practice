/* import { Component } from 'react'; */
import { useDispatch, useSelector/* , connect */} from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  // 컴포넌트를 저장소와 연결해서 데이터를 받을 수 있게 해주는 메서드, 인자로 함수를 받으며 함수는 리덕스에 의해 실행됨.
  // 저장소 내의 데이터가 변경되면 최신 값을 받음과 동시에 함수 컴포넌트가 재실행 되서 state 가 항상 최신 상태로 유지됨
  // 저장소에 있는 값을 꺼내어 쓸때마다 useSelector를 사용해야함.
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  // 저장소에 액션을 유발하는 훅, 정의할 때 인자를 받지 않고 사용할 때 인자를 전달한다.
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    /* dispatch({type: 'increment'}); */
  }
  const increaseHander = () => {
    dispatch(counterActions.increase(5)); // 전달되는 값은 내부적으로 payload 속성에 저장되서 전달됨. payload는 정해진 이름임
    /* dispatch({type: 'increase', amount: 5}) */
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    /* dispatch({type: 'decrement'}); */
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    /* dispatch({type: 'toggle'}) */
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

// 클래스 컴포넌트라면!

/* class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
