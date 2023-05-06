import { json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
/*   console.log(data); */

  return(
    <>
      <EventItem event={data.event} />
    </>
  )
}

export default EventDetailPage;
//loader 함수를 실행할 때 객체를 전달할 수 있음, 객체에는 요청 객체를 담고 있는 request 프로퍼티와 모든 라우트 파라미터가 담긴 params 프로퍼티
export const loader = async ({request, params}) => {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);
/*   console.log(response) */
  if (!response.ok) {
    throw json({message: 'Could not fetch detalis for seleted event.'}, {status: 500});
  } else {
    return response;
  }
}
// 이벤트를 삭제하기 위한 action 함수. 실제 사용하려는 EventItem이 EventDetail 컴포넌트에 속하기 때문에 action에 id를 부여해서 연결할 필요는 없음.
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