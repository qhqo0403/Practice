import classes from "./MemoItem.module.css";

const MemoItem = props => {
  return (
    <li className={classes.item}>
      <span>{props.memoItem.date}</span>
      <h3>{props.memoItem.title}</h3>
      <h2>{props.memoItem.content}</h2>
      <p>{props.memoItem.memo}</p>
    </li>
  )
}

export default MemoItem;