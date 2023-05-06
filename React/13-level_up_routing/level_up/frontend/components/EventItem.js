import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  // Form 컴포넌트가 없는 곳에서 action 을 호출할 때 사용하는 훅. 2개의 인자를 받음
  // 첫 번째 인자는 제출하려는 데이터로 자동으로 formData로 객체화 됨.
  // 두 번째 인자는 폼을 설정할수 있는 값에 대한 객체. method나 action 경로 등
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, {method: 'delete'});
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
