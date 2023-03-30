import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const InputCard = styled(Card)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
}
`;

const AddUser = (props) => {
  /* useState의 초기값이 문자열 공백일 때 '' 생략하면 에러! */
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState()

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0 ).'
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }
  
  const errorHandler = () => {
    setError(null);
  }

  return(
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <InputCard>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
          <Button>Add User</Button>
        </form>
      </InputCard>
    </>
  )
}

export default AddUser;