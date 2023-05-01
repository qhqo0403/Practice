import { useParams } from "react-router-dom";
// useParams 훅은 라우트 정의에서 프로퍼티로 정의한 모든 역동적 경로 세그먼트가 담긴 자바스크립트 객체로 라우트 정의할 때 썼던 식별 문자열과 같은 식별자(키)를 써야함
// : 뒤의 모든 주소를 가지고 있는 객체로 주소에 적힌 부분을 식별함
const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail!</h1>
      <p>{params.productId}</p>
    </>
  )
}

export default ProductDetailPage;