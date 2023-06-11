import { useParams } from "react-router-dom";
import MyChallengeItem from "../components/MyChallengeItem";

const CHALLENGE = [
  {id: 'c1', title: 'Challenge 1', startDate: '2023-05-10', dueDate: '2023-06-01'},
  {id: 'c2', title: 'Challenge 2', startDate: '2023-05-10', dueDate: '2023-06-01'},
  {id: 'c3', title: 'Challenge 3', startDate: '2023-05-10', dueDate: '2023-06-01'}
]

const MyChallengeDetailPage = () => {
  const params = useParams();

  return (
    <>
      <p>마이챌린지디테일 페이지</p>
      <p>{params.challengeId}</p>
      <MyChallengeItem challenge={CHALLENGE} />
    </>
  )
}

export default MyChallengeDetailPage;