import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// lazy loading 을 하려면 먼저 import문이 없어야 함. 지운 다음 다른 방식으로 불러오기
/* import BlogPage, { loader as postsLoader } from './pages/Blog'; */
import HomePage from './pages/Home';
/* import PostPage, { loader as postLoader } from './pages/Post'; */
import RootLayout from './pages/Root';
import { lazy, Suspense } from 'react';
// 페이지를 lazy loading 할 때, react에서 lazy 함수를 임포트해서 감싸주면 컴포넌트 함수로 쓸 수 있음
// import 만 있으면 import 가 프로미스를 반환하기 때문에 컴포넌트 함수가 될 수 없음! -> lazy 함수를 적용하는 이유(lazy함수는 동적으로 임포트를 하는 함수를 인자로 받음)
// lazy로 감싸서 컴포넌트 함수로 만들어주고나서 BlogPage를 사용할 때에는 react에서 임포트하는 suspense로 감싸서 사용하기
const BlogPage = lazy(() => import('./pages/Blog'));

const PostPage = lazy(() => import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          // import 함수 안에 경로를 전달하면 해당 페이지의 파일을 로딩받아 모듈에 로더함수 적용. import함수는 프로미스를 반환함.
          // 마지막의 로더함수는 프로미스의 response를 반환함
          // import한 페이지는 호출되었을 때 파일이 임포트되고 그 임포트한 파일의 loader 함수가 실행되는 구조.
          { index: true, element: <Suspense fallback={<p>loading...</p>}><BlogPage /></Suspense>, loader: () => import('./pages/Blog').then(module => module.loader()) },
          { path: ':id', element: <Suspense fallback={<p>loading...</p>}><PostPage /></Suspense>, loader: (meta) => import('./pages/Post').then(module => module.loader(meta)) },
          // params를 사용했을 때에는 loader 함수에 params 객체를 전달하거나 meta 객체를 전달해줘야함
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
