import RecentReadsBook from "../components/RecentReadsBook";


const RECENTREADBOOK = [
  {id: "b1", title: "코어 자바스크립트", author: "정재남", description: "자바스크립트의 근간을 이루는 핵심 이론들을 정확하게 이해하는 것을 목표로 합니다!"},
  {id: "b2", title: "코어 자바스크립트", author: "정재남", description: "자바스크립트의 근간을 이루는 핵심 이론들을 정확하게 이해하는 것을 목표로 합니다!"},
  {id: "b3", title: "코어 자바스크립트", author: "정재남", description: "자바스크립트의 근간을 이루는 핵심 이론들을 정확하게 이해하는 것을 목표로 합니다!"}
]

const RecentReadsPage = () => {
  return (
    <>
      <RecentReadsBook bookList={RECENTREADBOOK} />
    </>
  )
}

export default RecentReadsPage;