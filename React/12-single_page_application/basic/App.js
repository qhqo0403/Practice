import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  // children 은 부모 라우트로 wrapper로 쓸 수 있음. position fiexd와 같음. 지정된 컴포넌트에 하위 라우트가 어디에 렌더링 될지 Outlet 으로 표시해줘야함
  {
    path: '/',
    element: <RootLayout />,
    // 오류가 생겼을 때 렌더링할 페이지
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/products', element: <ProductsPage />},
      // 콜른 뒤에 오는 문자열은 동적인 경로로 같은 페이지 내에서 다른 내용을 표시할 수 있도록함. products/뒤에 어떤 주소가 오던지 같은 페이지가 계속 로딩됨 -> 제품 상세페이지, 해당 컴포넌트에서 useParams
      {path: '/products/:productId', element: <ProductDetailPage />}
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
