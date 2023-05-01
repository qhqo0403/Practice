import { Link } from "react-router-dom";

// Link 컴포넌트는 a태그의 역할을 하고 내부적으로도 a 태그로 렌더링 됨!
// 링크를 클릭이 발생했을 때 HTTP 요청을 전송하는 브라우저의 기본 설정을 막아주고 라우트 정의를 확인해서 그에 맞는 콘텐츠를 로딩함!

const HomePage = () => {
  // useNavigate훅을 사용해서 navigate를 트리거할 수 있음!
/*   const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/products');
  } */

  return(
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to='/products'>the list of products</Link>
      </p>
    </>
  )
}

export default HomePage;