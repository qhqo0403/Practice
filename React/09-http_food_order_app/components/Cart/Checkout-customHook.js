import classes from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const isEmpty = value => value.trim() !== '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler : nameBlurHandler
  } = useInput(isEmpty);
  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler : streetBlurHandler
  } = useInput(isEmpty);
  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler : postalCodeBlurHandler
  } = useInput(isFiveChars);
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler : cityBlurHandler
  } = useInput(isEmpty);

  const confirmHandler = (event) => {
    event.preventDefault();

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    });
  };

  const nameControlClasses = `${classes.control} ${nameHasError ? classes.invalid : ''}`;
  const streetControlClasses = `${classes.control} ${streetHasError ? classes.invalid : ''}`;
  const postalCodeControlClasses =  `${classes.control} ${postalCodeHasError ? classes.invalid : ''}`;
  const cityControlClasses = `${classes.control} ${cityHasError ? classes.invalid : ''}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
        {nameHasError && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' onChange={streetChangeHandler} onBlur={streetBlurHandler}/>
        {streetHasError && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' onChange={postalCodeChangeHandler} onBlur={postalCodeBlurHandler}/>
        {postalCodeHasError && <p>Please enter a valid postal code(5 characters long).</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' onChange={cityChangeHandler} onBlur={cityBlurHandler}/>
        {cityHasError && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
