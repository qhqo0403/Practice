import { useNavigate } from "react-router-dom";
import classes from "./BookList.module.css";

const BookList = props => {
  const navigate = useNavigate();
  let buttonTag = props.activityTag;

  const navigateHandler = () => {
    if (buttonTag === "챌린지로 등록하기") {
      navigate('../myChallenge/new');
    }
    if (buttonTag === "독후감 쓰기") {
      navigate('../review/new');
    }
  }

  return (
    <>
      <ul className={classes.list}>
        {props.bookList.map((book) => (
          <li key={book.id} className={classes.item}>
            <div className={classes.bookImg}>
              <img src="" alt="책 사진" />
            </div>
            <div>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p className={classes.description}>{book.description}</p>
              <div>
                <button onClick={navigateHandler}>{buttonTag}</button>
                <button>삭제하기</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default BookList;