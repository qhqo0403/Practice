import TobeReadsBook from "../components/TobeReadsBook";

const TOBEREADBOOK = [
  {id: "b1", title: "모던 자바스크립트", author: "이웅모", description: "269개의 그림과 원리를 파헤치는 설명으로 '자바스크립트의 기본 개념과 동작 원리'를 이해하자!"},
  {id: "b2", title: "모던 자바스크립트", author: "이웅모", description: "269개의 그림과 원리를 파헤치는 설명으로 '자바스크립트의 기본 개념과 동작 원리'를 이해하자!"},
  {id: "b3", title: "모던 자바스크립트", author: "이웅모", description: "269개의 그림과 원리를 파헤치는 설명으로 '자바스크립트의 기본 개념과 동작 원리'를 이해하자!"}
]

const ToBeReadsPage = () => {
  return (
    <>
      <TobeReadsBook bookList={TOBEREADBOOK} />   
    </>
  )
}

export default ToBeReadsPage;