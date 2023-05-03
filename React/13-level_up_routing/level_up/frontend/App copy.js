import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventLayout from "./pages/EventRoot";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <HomePage />},
    {path: 'events', element: <EventLayout />, children: [
      {index: true, element: <EventsPage />, loader: async () => {
        // loader 함수 -> 해당 컴포넌트가 렌더링 되기 직전에 라우터에 의해 실행되는 함수! 컴포넌트를 렌더링하기 전에 데이터를 먼저 가져오려는 경우 사용
        const response = await fetch('http://localhost:8080/events');

        if (!response.ok) {
          //....
        } else {
          const resData = await response.json();
          return resData.events // 데이터를 반환하면 해당 컴포넌트 뿐만 아니라 데이터가 필요한 모든 컴포넌트에서 사용할 수 있음. 데이터를 사용하려는 컴포넌트에서 useLoaderData 훅 사용
        }
      }},
      {path: ':eventId', element: <EventDetailPage />},
      {path: 'new', element: <NewEventPage />},
      {path: ':eventId/edit', element: <EditEventPage />}
    ]},
  ]},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// 절대 경로
/* const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <HomePage />},
    {patn: '/events', element: <EventLayout />, children: [
      {path: '/events', element: <EventsPage />},
      {path: '/events/:eventId', element: <EventDetailPage />},
      {path: '/events/new', element: <NewEventPage />},
      {path: '/events/:eventId/edit', element: <EditEventPage />}
    ]},
  ]},
]); */
