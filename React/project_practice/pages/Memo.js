import { useState } from "react";
import MemoList from "../components/MemoList";
import NewMemoFormModal from "../components/NewMemoFormModal";

const MEMOLIST = [
  {id: "m1", date: "2023-05-06", type: 'paragraph', title: 'Book title', content: "Some paragraph", memo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!"},
  {id: "m2", date: "2023-05-06", type: 'paragraph', title: 'Book title', content: "Some paragraph", memo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!"},
  {id: "m3", date: "2023-05-06", type: 'inspiration', title: 'Book title', content: "Some text", memo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!"},
  {id: "m4", date: "2023-05-06", type: 'inspiration', title: 'Book title', content: "Some text", memo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!"},
]


const MemoPage = () => {
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
    document.body.style.overflow ="hidden";
  }
  const hideFormHandler = () => {
    setFormIsShown(false);
    document.body.style.overflow ="unset";
  }

  return (
    <>
      {formIsShown && <NewMemoFormModal onHideForm={hideFormHandler} />}
      <MemoList memoLists={MEMOLIST} onShowForm={showFormHandler} />
    </>
  )
}

export default MemoPage;