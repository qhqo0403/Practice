import { Outlet } from "react-router-dom";
import MyChallengeList from "../components/MyChallengeList";

const CHALLENGE = [
  {id: 'c1', title: 'Challenge 1', startDate: '2023-05-10', dueDate: '2023-06-01'},
  {id: 'c2', title: 'Challenge 2', startDate: '2023-05-10', dueDate: '2023-06-01'},
  {id: 'c3', title: 'Challenge 3', startDate: '2023-05-10', dueDate: '2023-06-01'}
]

const MychallengePage = () => {
  return (
    <>
      <p>마이챌린지 페이지</p>
      <MyChallengeList challenge={CHALLENGE} />
      <Outlet />
    </>
  )
}

export default MychallengePage;