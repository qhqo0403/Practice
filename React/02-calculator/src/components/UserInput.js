import { useState } from "react";
import classes from './UserInput.module.css';

const initialUserInput = {
  "current-savings" : 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10
}

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHander = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHander = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHander = (input, value) => {
    setUserInput((prevInput) => {
      return {...prevInput, [input]: value} // 객체의 키값으로 동적인 값을 받을 때 [] 대괄호 사용
    });
  };


  return (
    <form onSubmit={submitHander} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={(e) => { inputChangeHander("current-savings", e.target.value)} } value={userInput["current-savings"]} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={(e) => { inputChangeHander("yearly-contribution", e.target.value)} } value={userInput["yearly-contribution"]} />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={(e) => { inputChangeHander("expected-return", e.target.value)} } value={userInput["expected-return"]} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={(e) => { inputChangeHander("duration", e.target.value)} } value={userInput["duration"]} />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={resetHander}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  )
};

export default UserInput;