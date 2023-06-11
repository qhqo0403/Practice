const AccountForm = props => {

  const submitHandler = e => {
    e.preventDefault();
  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <img src="" alt="사진 준비중"/>
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="name">닉네임</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPw">비밀번호 확인</label>
          <input type="password" id="confirmPw" name="confirmPw" />
        </div>
        <div>
          <button disabled={true}>수정</button>
          <button>저장</button>
        </div>
      </form>
    </>
  )
}

export default AccountForm;