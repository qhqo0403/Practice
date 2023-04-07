import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

/* email reducer 함수 */
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'USER_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
};
/* password reducer 함수 */
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if (action.type === 'USER_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false};
};

const Login = (props) => {
/*   const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(); */
/*   const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); */
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  /* useEffect 가 값만 변경되고 유효성 검사는 통과한 상태에서 또 다시 이펙트 함수를 실행하지 않도록 객체 분해를 사용하여 변수 할당 
  전체 객체를 의존성으로 사용하지 않고 객체의 특정 속성을 의존성으로 사용함*/
  const {isValid: emailIsvalid} = emailState;
  const {isValid: passwordIsvalid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      /* console.log('typing...'); */
      setFormIsValid(emailIsvalid && passwordIsvalid);
    }, 500);
    
    /* 클린업 함수! 함수 자체를 반환하고, 이펙트가 실행되기 전(처음 제외)과 컴포넌트가 사라질 때(언마운트될 때) 실행됨 */
    return () => {
      /* console.log('clean up!'); */
      clearTimeout(identifier);
    }
  }, [emailIsvalid, passwordIsvalid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

/*     setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    ); */
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

/*     setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    ); */
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'USER_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'USER_BLUR'});
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
