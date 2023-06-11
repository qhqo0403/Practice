import classes from "./ReviewDetailModal.module.css";

const ReviewDetailModal = props => {
  return (
    <>
      <div className={classes.back} onClick={props.onHideDetail}></div>
      <div>
        <div className={classes.card}>
          <div>
            <img src="" alt="책 사진"/>
          </div>
          <div>
            <span>{props.reviewId}</span>
            <h1>책 제목</h1>
            <p>작가</p>
          </div>
          <p>
            리뷰 내용
          </p>
          <button onClick={props.onHideDetail}>닫기(임시버튼)</button>
        </div>
      </div>
    </>
  )
}

export default ReviewDetailModal;