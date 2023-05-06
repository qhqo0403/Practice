// loader 함수에서 반환한 데이터를 받아와서 쓸 수 있도록 해주는 훅, promise로부터 산출된 최종 데이터를 전달 받음
import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
/*   console.log(data) */
/*   if (data.isError) {
    return <p>{data.message}</p>
  } */

  const events = data.events;

  return (
    <EventsList events={events} />
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // json 함수는 json 형식의 데이터가 포함된 Response 객체를 생성해주는 함수로 데이터 변환과정이 불필요함!
    throw json({message: 'Could not fetch events.'}, {status: 500});
    // 응답객체에 데이터를 직접 입력할 때에는 json으로 변환해줘야함!, 오류를 구분하기 위해 status 추가
    /* throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500}); */
    /* return { isError: true, message: 'Could not fetch events.'} */
  } else {
    return response;
    // 라우터가 응답객체를 지원하기 때문에 추출하는 과정을 거치지 않고 바로 반환할 수 있음
    /* const resData = await response.json();
    return resData.events 여기에서는 events 프로퍼티를 바로 반환한 것 */
  }
}