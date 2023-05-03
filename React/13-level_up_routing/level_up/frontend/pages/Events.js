// loader 함수에서 반환한 데이터를 받아와서 쓸 수 있도록 해주는 훅, promise로부터 산출된 최종 데이터를 전달 받음
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events

  return (
    <EventsList events={events} />
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    //....
  } else {
    return response;
    // 라우터가 응답객체를 지원하기 때문에 추출하는 과정을 거치지 않고 바로 반환할 수 있음
    /* const resData = await response.json();
    return resData.events 여기에서는 events 프로퍼티를 바로 반환한 것 */
  }
}