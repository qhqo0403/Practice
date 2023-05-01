import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return(
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          {/* NavLink를 사용하면 className을 객체를 갖는 함수의 형태로 조건부 클래스 적용을 할 수 있음. 객체에 할당한 프로퍼티는 자동으로 불리언 */}
          <NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end >Home</NavLink>
          {/* end는 지정된 경로로 끝나는 경우에만 특정 상태를 적용하도록 더 정확하게 할 수 있지만 어떤 이유에서인지 안써도 되긴 했음. */}
        </li>
        <li>
          <NavLink to='/products' className={({isActive}) => isActive ? classes.active : undefined} >Products</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default MainNavigation;