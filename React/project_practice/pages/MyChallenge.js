import { Link, Outlet } from "react-router-dom";

const CHALLENGE = [
  {id: 'c1', title: 'Challenge 1'},
  {id: 'c2', title: 'Challenge 2'},
  {id: 'c3', title: 'Challenge 3'}
]

const MychallengePage = () => {
  return (
    <>
      <p>마이챌린지 페이지</p>
      <ul>
        {CHALLENGE.map(chall => (
            <li key={chall.id}>
              <Link to={`${chall.id}`}>{chall.title}</Link>
            </li>
          ))
        }
      </ul>
      <Outlet />
    </>
  )
}

export default MychallengePage;