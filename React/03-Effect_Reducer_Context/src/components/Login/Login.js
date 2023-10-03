import React, {  useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValue: action.val.includes('@')}
  };
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false};
}
// 리듀서 함수는 dispatch된 action을 기반으로 업데이트된 최신 state를 반환
// dispatch된 함수가 호출되면서 인자로 전달되는 객체가 action이 됨

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6};
  };
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false};
}

const Login = (props) => {
/*   const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(); */
/*   const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); */
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  // emailState는 {value: '', isValid: null}의 형태를 가지고 있음
  // useReducer 로 email과 관련된 state 2개를 같이 관리하고 있음 -> 입력받은 값을 저장하는 것과 유효성을 검증하는 것
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const indentifier = setTimeout(() => {
      setFormIsValid(
        emailState.isValid&& passwordState.isValid
      );
    }, 500);
    
    return () => { // 클린업 함수. 
      clearTimeout(indentifier);
    };
  }, [emailIsValid, passwordIsValid]);
  // emailState, passwordState로 쓰면 유효성은 이미 검증되었는데 state의 value만 변경될 경우에도 useEffect가 실행되기 때문에 유효성과 관련된 속성을 변수로 선언하여 의존성 배열에 추가

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})

/*     setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    ); */
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})

/*     setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    ); */
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// 이전 상태를 기반으로 하는 state를 업데이트 할 때에는 함수형으로 작성해줘야하는데, 하나에 state에 다른 state가 연관되어 있을 때에는 함수형으로 작성할 수 없음 -> useReducer 활용!
// 두 state를 함께 쓰면 안되는 이유는 state업데이트는 스케쥴에 따라서 업데이트 되기때문에 특정 state업데이트 함수가 실행될 때 다른 state가 최신상태가 아닐수도 있기 때문
// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
// dispatchFn 를 호출하면 리액트는 최신 state들을 가져와서 reducerFn을 실행함
// initialState 는 초기값이고 state가 더 복잡한 경우 초기값을 설정하기 위한 initFn를 만들 수 있음
// 연관된 state들이 업데이트 될 때 사용할 수 있음 -> 데이터를 입력받고 그 유효성을 검사하는데에 state 조각이 여러 개 일때