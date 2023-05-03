import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventLayout from "./pages/EventRoot";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <HomePage />},
    {path: 'events', element: <EventLayout />, children: [
      {index: true, element: <EventsPage />, loader: eventsLoader},
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
