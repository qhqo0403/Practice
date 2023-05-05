import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
    // useLoaderDatd를 사용해서 데이터를 전달하면 EventForm의 기준에서 가장 가까운 접근 가능한 데이터는 Edit 에 있기 때문에 useRouteLoaderData를 사용해서 loader 함수를 가지고 있는 부모를 특정지어줘야함
  const data = useRouteLoaderData('event-detail');

  return(
    <EventForm event={data.event} />
  )
}

export default EditEventPage;