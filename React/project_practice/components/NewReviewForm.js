const NewReviewForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">책 제목</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="author">작가</label>
        <input type="text" id="author" name="author" />
      </div>
      <div>
        <label htmlFor="reivew">리뷰</label>
        <input type="textarea" id="review" name="review" />
      </div>
      <button>등록하기</button>
    </form>
  )
}

export default NewReviewForm;