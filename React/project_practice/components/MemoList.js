import { useState } from "react";

import MemoItem from "./MemoItem";
import classes from "./MemoList.module.css";

const MemoList = props => {
  const showMemoForm = () => {
    props.onShowForm();
  }

  return (
    <>
      <div className={classes.heading}>
        <h1>메모 리스트</h1>
        <button onClick={showMemoForm}>메모 등록하기</button>
      </div>
      <div className={classes.list}>
        <div>
          <input type="radio" name="type" id="paragraph" />
          <label htmlFor="paragraph">구절보기</label>
          <input type="radio" name="type" id="inspiration" />
          <label htmlFor="inspiration">기록보기</label>
        </div>
        <ul>
          {props.memoLists.map(memo => (
            <MemoItem key={memo.id} memoItem={memo} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default MemoList;