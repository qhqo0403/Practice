import { useParams } from "react-router-dom";

const MyChallengeDetailPage = () => {
  const params = useParams();

  return (
    <>
      <p>마이챌린지디테일 페이지</p>
      <p>{params.challengeId}</p>
    </>
  )
}

export default MyChallengeDetailPage;