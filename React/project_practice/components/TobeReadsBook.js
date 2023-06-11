import BookList from "../components/BookList";

const TobeReadsBook = props => {
  return (
    <>
      <div>
        <p>읽고 싶은 책 페이지</p>
        <button>검색하기</button>
      </div>
      <BookList bookList={props.bookList} activityTag="챌린지로 등록하기" />
    </>
  )
}

export default TobeReadsBook;