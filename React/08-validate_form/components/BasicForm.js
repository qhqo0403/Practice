import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  // first name input
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(value => value.trim() !== '');
  // last name input
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(value => value.trim() !== '');
  // email input
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'));

  let formIsValid = false;
  
  // 모두 true 일 때 true가 되어야 하므로 && 연산자
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='f-name'>First Name</label>
          <input type='text' id='f-name' name='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameHasError && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='l-name'>Last Name</label>
          <input type='text' id='l-name' name='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameHasError && <p className='error-text'>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className='error-text'>Please enter a valid email addredd.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
