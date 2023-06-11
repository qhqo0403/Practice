import { useNavigate } from "react-router-dom";
import classes from "./ReviewList.module.css";
import ReviewItem from "./ReviewItem";

const ReviewList = props => {
  const navigate = useNavigate();

  const newReviewHandler = () => {
    navigate('new');
  }

  return (
    <>
      <div>
        <h1>나의 리뷰</h1>
        <button onClick={newReviewHandler}>새 독후감 등록</button>
      </div>
      <ul className={classes.list}>
        {props.reviews.map(review => (
          <ReviewItem key={review.id} review={review} onShowDetail={props.onShowDetail}/>
        ))}
      </ul>
    </>
  )
}

export default ReviewList;