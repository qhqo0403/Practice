import classes from "./MyChallengeItem.module.css";

const MyChallengeItem = props => {
  return (
    <>
      <div className={classes.wrapper}>
        <img src="" alt="책 사진" />
        <div>
          <h1>{props.challenge[0].title}</h1>
          <span>{`${props.challenge[0].startDate} ~ ${props.challenge[0].dueDate}`}</span>
          <p>Description</p>
        </div>
      </div>
      <div>
        메모 컴포넌트
      </div>
    </>
  )
}

export default MyChallengeItem;