import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  /* const [formIsvalid, setFormIsvalid] = useState(false); */

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

/*   인풋이 여러개 일 때 폼 전체의 유효성 검증을 위한 useEffect
  useEffect(() => {
    만약 인풋이 여러개라면 의존성 배열에 추가하고 if 문에 넣어주면 됨!
    if (enteredNameIsvalid) {
      setFormIsvalid(true);
    } else {
      setFormIsvalid(false);
    }
  }, [enteredNameIsvalid]); */
  
  const nameInputChangeHandelr = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
    setEnteredNameTouched(true);
    // enteredName.trim().lenght === 0
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  };
  
  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandelr} onBlur={nameInputBlurHandler}/>
        {nameInputIsInValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
