// 데이터가 도착하기 전에 컴포넌트의 일부를 렌더링하려고 하는 경우
import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
// Suspense 컴포넌트는 react 에서 임포트!! 다른 데이터가 도착하기를 기다리는 동안에 폴백을 보여주는 특정한 상황에서 사용
//Await 컴포넌트에 데이터가 도착하면 렌더링할 항목을 추가. resolve 프로퍼티는 연기된 값 중 하나를 취함
function EventsPage() {
  const {events} = useLoaderData();

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvent = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({message: 'Could not fetch events.'}, {status: 500});
  } else {
    // loader 함수와 useloaderData 사이에 다른 함수가 있을 때에는 데이터를 직접 파싱해야함
    const resData = await response.json();
    return resData.events;
  }
}

// 데이터가 없어도 컴포넌트를 로딩하고 렌더링하고자 할 때 defer 함수를 이용해서 http 요청이 들어있는 값을 전달
export const loader = async () => {
  return defer({
    events: loadEvent()
  });
}