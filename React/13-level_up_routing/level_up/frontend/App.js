import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventLayout from "./pages/EventRoot";
import ErrorPage from "./pages/Error";
import {action as manipulateEventAction} from './components/EventForm';
import NewsletterPage, {action as newsletterAction} from "./pages/Newsletter";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
    {index: true, element: <HomePage />},
    {path: 'events', element: <EventLayout />, children: [
      {index: true, element: <EventsPage />, loader: eventsLoader},
      // 레이아웃 뿐만 아니라 loader를 공유하기 위해서 래퍼 컴포넌트를 만들 수 있음. loader 데이터가 있는 부모를 특정하기 위해 id 속성이 필요함
      {path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
        {index: true, element: <EventDetailPage />, action: deleteEventAction},
        {path: 'edit', element: <EditEventPage />, action: manipulateEventAction}
      ]},
      {path: 'new', element: <NewEventPage />, action: manipulateEventAction},
    ]},
    {path: 'newsletter', element: <NewsletterPage />, action: newsletterAction},
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
