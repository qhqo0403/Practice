import classes from "./NewMemoFormModal.module.css";

const NewMemoFormModal = props => {
  const submitHandler = e => {
    e.preventDefault();
  }

  const closeFormHandler = () => {
    props.onHideForm();
  }

  return (
    <>
      <div className={classes.back} onClick={closeFormHandler}></div>
      <div className={classes.card}>
        <form onSubmit={submitHandler}>
          <div>
            <input type="radio" name="type" id="paragraph" />
            <label htmlFor="paragraph">구절등록</label>
            <input type="radio" name="type" id="inspiration" />
            <label htmlFor="inspiration">기록등록</label>
          </div>
          <div>
            <label htmlFor="title">책 제목</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="content">구절 or 메모제목</label>
            <input type="text" id="content" name="content" />
          </div>
          <div>
            <label htmlFor="memo">메모</label>
            <input type="textarea" id="memo" name="memo" />
          </div>
        </form>
        <button onClick={closeFormHandler}>닫기</button>
      </div>
    </>
  )
}

export default NewMemoFormModal;