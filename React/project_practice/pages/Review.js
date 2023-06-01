import { useNavigate } from "react-router-dom";

const ReviewPage = () => {
  const navigate = useNavigate();

  const newReviewHandler = () => {
    navigate('new');
  }

  return (
    <>
      <p>독후감 목록 페이지</p>
      <button onClick={newReviewHandler}>새 독후감 등록</button>
    </>
  )
}

export default ReviewPage;