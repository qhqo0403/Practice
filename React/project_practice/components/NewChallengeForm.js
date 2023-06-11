const NewChallengeForm = () => {
  const newSumbitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={newSumbitHandler}>
      <div>
        <label>책 제목</label>
        <input type="text" />
      </div>
      <div>
        <label>시작 날짜</label>
        <input type='date' />
      </div>
      <div>
        <label>완독 날짜</label>
        <input type='date' />
      </div>
      <button>등록하기</button>
    </form>
  )
}

export default NewChallengeForm;