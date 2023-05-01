import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// 라우터 정의하기. 임포트 하고나서 객체로 이루어진 배열을 인수로 받는 함수 사용. 각각의 객체는 하나의 라우터를 나타냄.
// 라우터를 사용하기 위해서는 함수에서 리턴된 값을 변수나 상수에 저장해야함
const router = createBrowserRouter([
  // '/' 한 개는 메인 페이지. 한 개가 있거나 없거나 메인으로 연결됨!
  {path: '/', element: <HomePage />},
  {path: '/products', element: <ProductsPage />}
]);
// path 는 경로, element는 경로(라우트)가 활성화 될 때 로딩될 컴포넌트

function App() {
  return (
    // provider 안에 상수로 저장한 router 를 속성으로 전달
    <RouterProvider router={router} />
  )
}

export default App;
