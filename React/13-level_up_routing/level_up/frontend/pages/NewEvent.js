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
  // formData를 사용하려면 인풋에 네임속성이 들어있어야함
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(eventData)
  });

  if (!response.ok) {
    throw json({message: 'Could not save event.'}, {status: 500});
  }
/* 
  return redirect('/events'); */
}