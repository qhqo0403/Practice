import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return(
    <EventForm />
  )
}

export default NewEventPage;

// request 객체에는 폼 데이터가 포함되어 있음
export const action = async ({request, params}) => {
  // formData를 사용하려면 인풋에 네임속성이 들어있어야함,
  const data = await request.formData();

  const eventData = {
    // formDatd에서 데이터를 추출
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });

  // 백엔트 측에서 발생한 에러를 잡아내기 위한 if문. 422 에러코드가 발생하면 action에서 오류에 대한 응답을 리턴하고 useActionData로 반환된 데이터에 접근할 수 있음
  if (response.status === 422) {
    return response;
  }
  
  if (!response.ok) {
    throw json({message: 'Could not save event.'}, {status: 500});
  }
  // 제출하고 나서 라우트 이동을 제어
  return redirect('/events');
}