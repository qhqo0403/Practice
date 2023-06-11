import { useState } from "react";
import ReviewList from "../components/ReviewList";
import ReviewDetailModal from "../components/ReviewDetailModal";

const REVIEWS = [
  {id: "r1", date: "2023-05-05", title: "코어 자바스크립트", author: "정재남", review: "여전히 어렵긴 하지만 자바스크립트에 대해서 조금 더 이해하게 된 것 같다!"},
  {id: "r2", date: "2023-05-05", title: "코어 자바스크립트", author: "정재남", review: "여전히 어렵긴 하지만 자바스크립트에 대해서 조금 더 이해하게 된 것 같다!"},
  {id: "r3", date: "2023-05-05", title: "코어 자바스크립트", author: "정재남", review: "여전히 어렵긴 하지만 자바스크립트에 대해서 조금 더 이해하게 된 것 같다!"},
];

const ReviewPage = () => {
  const [detailIsShown, setDetailIsShown] = useState(false);
  const [reviewId, setReviewId] = useState('');

  const showDetailHandler = (id) => {
    console.log(id);
    setReviewId(id);
    setDetailIsShown(true);
  }
  const hideDetailHandler = () => {
    setDetailIsShown(false);
  }

  return (
    <>
      <p>독후감 목록 페이지</p>
      {detailIsShown && <ReviewDetailModal onHideDetail={hideDetailHandler} reviewId={reviewId}/>}
      <ReviewList reviews={REVIEWS} onShowDetail={showDetailHandler} />
    </>
  );
};

export default ReviewPage;