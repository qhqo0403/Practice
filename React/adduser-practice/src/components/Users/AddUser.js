import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";

const StyledCard = styled(Card)`
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
  /* useState의 초기값이 문자열 공백일 때 '' 생략하면 에러날수도! */
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }
  
  return(
    <StyledCard>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge} />
        <Button>Add User</Button>
      </form>
    </StyledCard>
  )
}

export default AddUser;