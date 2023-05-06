import { Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import { Suspense } from "react";
import EventsList from "../components/EventsList";
// 요청시간이 각각 다른 Await들이 있다면 각각 Suspense로 감싸줘야함! -> 하나로 감싸면 모두 다 로딩될때까지 기다리기 때문.
const EventDetailPage = () => {
  const {events, event} = useRouteLoaderData('event-detail');

  return(
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetailPage;


const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id);
/*   console.log(response) */
  if (!response.ok) {
    throw json({message: 'Could not fetch detalis for seleted event.'}, {status: 500});
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({message: 'Could not fetch events.'}, {status: 500});
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// defer 객체에 전달되는 함수에 await 을 추가해서 컴포넌트가 로딩되기 전에 어떤 데이터를 기다리고 어떤 데이터를 연기해야하는지, 페이지를 이동하고 나서 어떤 데이터를 로딩해야하는지 제어할 수 있음

export const loader = async ({request, params}) => {
  const id = params.eventId;

  return defer({
    events: loadEvents(),
    event: await loadEvent(id)
  })
}


export const action = async ({request, params}) => {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw json({message: 'Could not delete event.'}, {status: 500});
  }
  return redirect('/events');
}