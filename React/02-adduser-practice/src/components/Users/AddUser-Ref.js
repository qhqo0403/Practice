import React, { useRef, useState } from "react";
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
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    /* console.log(nameInputRef.current.value); */
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0 ).'
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    /* ref 를 이용해서 DOM 요소의 값을 바꾸는건 바람직하지는 않지만 input은 그나마 사용 */
    nameInputRef.current.value ='';
    ageInputRef.current.value = '';
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
          <input type="text" id="username" ref={nameInputRef}/>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef}/>
          <Button>Add User</Button>
        </form>
      </InputCard>
    </>
  )
}

export default AddUser;