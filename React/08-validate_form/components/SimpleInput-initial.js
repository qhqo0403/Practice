import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
/*   const nameInputRef = useRef(); */
  const [enteredNameIsvalid, setEnteredNameIsvalid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  // useEffect가 있다면 처음부터 enteredNameIsvalid 가 true면 안됨! -> 간단한 앱이면 몰라도 useEffect가 있다면 false로 시작해야하기 때문에 state를 하나 더 만들어서 두 개의 불리언 값으로 관리해야함
  useEffect(() => {
    if (enteredNameIsvalid) {
      console.log('Name input is valid!');
    }
  }, [enteredNameIsvalid]);

  const nameInputChangeHandelr = (event) => {
    // state로 입력값을 받아오는 방법, 매 키입력마다 인식해서 값을 가져옴
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== '') {
      setEnteredNameIsvalid(true);
    }
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsvalid(false);
    }
  }
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
    setEnteredNameTouched(true);
    // enteredName.trim().lenght === 0
    if (enteredName.trim() === '') {
      setEnteredNameIsvalid(false);
      return;
    }
    console.log(enteredName);
    
    setEnteredNameIsvalid(true);
    // state를 통한 초기화
    setEnteredName('');

    //Ref 로 입력값을 받아오는 방법! 폼이 제출될 때 한번만 입력값을 가져옴. form이 제출 될 때 객체가 생성되고 한번 값을 가져오기 때문에 let 이 아닌 const 가 가능한 부분!
    /* const enteredValue = nameInputRef.current.value;
    console.log(enteredValue); */
    // Ref를 사용했을 때 밑의 방식으로 초기화 할 수 있지만 DOM 자체를 조작하는 것이기 때문에 지양해야함
    /* nameInputRef.current.value = ''; */

  }
  // 두 개의 state가 true 면 nameInputIsvalid 도 true 가 되니까
  const nameInputIsInvalid = !enteredNameIsvalid && enteredNameTouched;
  // 유효성 검증에 대한 피드백을 클래스를 활용해서 할수도 있고 state를 활용에서 요소를 렌더링 하도록 만들 수 있음!
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandelr} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
