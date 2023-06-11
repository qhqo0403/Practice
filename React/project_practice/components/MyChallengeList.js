import { Link, useNavigate } from "react-router-dom";
import classes from "./MyChallengeList.module.css";

const MyChallengeList = props => {
  const navigate = useNavigate();

  const newChallengeHandler = () => {
    navigate('new');
  }

  return (
    <div className={classes.wrapper}>
      <ul>
        {props.challenge.map((chall) => (
          <li key={chall.id} className={classes.item}>
            <Link to={chall.id}>
              <img src="" alt="책 사진"/>
              <div>
                <h2>{chall.id}</h2>
                <span>{`${chall.startDate} ~ ${chall.dueDate}`}</span>
                <p>{chall.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={newChallengeHandler}>New Challenge</button>
    </div>
  )
}

export default MyChallengeList;