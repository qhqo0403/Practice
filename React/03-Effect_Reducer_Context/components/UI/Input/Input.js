import React, { useImperativeHandle, useRef } from "react";
import classes from './Input.module.css';

/* ref를 외부에서 설정해야 하는 경우 컴포넌트 함수는 두번째 매개변수로 ref 를 받을 수 있음 */
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }

  /* useImperativeHandle은 사용하는 것을 지양하는 편이 좋음 */
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  });
  return(
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
});

export default Input;