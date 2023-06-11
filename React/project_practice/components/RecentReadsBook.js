import BookList from "../components/BookList";

const RecentReadsBook = props => {

  return (
    <>
      <p>읽은 책 페이지</p>
      <BookList bookList={props.bookList} activityTag="독후감 쓰기" />
    </>
    
  )
}

export default RecentReadsBook;