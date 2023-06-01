import { NavLink } from "react-router-dom";
import classes from "./MyNavigation.module.css";

const MyNavigation = () => {
  return(
    <ul className={classes.tab}>
      <li className={classes.list}>
        <NavLink to='/account' className={({isActive}) => isActive ? classes.active : undefined}>계정</NavLink>
      </li>
      <li className={classes.list}>
        <NavLink to='/recent' className={({isActive}) => isActive ? classes.active : undefined}>읽은 책 목록</NavLink>
      </li>
      <li className={classes.list}>
        <NavLink to='/tobe' className={({isActive}) => isActive ? classes.active : undefined}>읽을 책 목록</NavLink>
      </li>
      <li className={classes.list}>
        <NavLink to='/mychallenge' className={({isActive}) => isActive ? classes.active : undefined}>나의 챌린지</NavLink>
      </li>
      <li className={classes.list}>
        <NavLink to='/review' className={({isActive}) => isActive ? classes.active : undefined}>독후감</NavLink>
      </li>
      <li className={classes.list}>
        <NavLink to='/memo' className={({isActive}) => isActive ? classes.active : undefined}>메모</NavLink>
      </li>
    </ul>
  )
}

export default MyNavigation;