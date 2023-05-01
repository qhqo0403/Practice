import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
// 라우터 객체를 정의하는 대신에 쓸수 있는 방법. 컴포넌트 함수 내부에 <Route> 컴포넌트를 써서 할수도 있음!
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage />} />
    <Route path='/products' element={ProductsPage} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
