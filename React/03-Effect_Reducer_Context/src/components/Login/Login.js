import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  // useEffect는 http request 뿐만 아니라 어떤 액션에 대한 응답으로 활용할 수 있음
  useEffect(() => {
    const indentifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);
    
    return () => { // 클린업 함수. 
      clearTimeout(indentifier);
    };
    // 클린업 함수는 useEffect 함수가 실행되기전에 실행되는 함수 -> useEffect가 여러번 실행되서 요청이 반복되지 않도록 할수있음
    // 컴포넌트가 렌더링되고 useEffect가 최초 한번 실행될 때에는 클린업함수가 실행되지 않고 그 이후 반복적으로 실행될 때 useEffect가 실행되기 전에 실행됨
    // 만약 의존성 배열이 비어있어서 useEffect가 한번만 실행될 때에는 그 컴포넌트가 화면에서 사라지면(DOM에서 제거되면) 클린업 함수가 실행됨
  }, [enteredEmail, enteredPassword]);
  // state 업데이트 함수는 변경되는 것이 아니기 때문에 의존성 배열에 추가하지 않아도 됨!
  // 의존성 배열에 추가해야하는 것들은 state나 props로 컴포넌트가 재평가될 때 변경될 수 있는 것들이기 때문!
  // 의존성 배열에서의 예외는 state업데이트 함수나 변수, 내장 API는 안적어줘도 됨!

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);  
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
