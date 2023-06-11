import classes from "./ReviewItem.module.css";

const ReviewItem = props => {
  const fliterReviewId = () => {
    props.onShowDetail(props.review.id);
  }

  return (
    <li className={classes.item} onClick={fliterReviewId}>
      <div>
        <img src="" alt="책 사진" />
      </div>
      <div>
        <div>
          <h2>{props.review.title}</h2>
          <span>{props.review.date}</span>
        </div>
          <span>{props.review.author}</span>
          <p>{props.review.title}</p>
      </div>
    </li>
  )
}

export default ReviewItem;