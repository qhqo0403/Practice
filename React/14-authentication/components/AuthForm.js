import { Form, Link, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
    // 쿼리 매개변수에 접근하는 훅 = useSearchParams. 사용하는 모습은 state와 비슷해서 배열분해구조로 현재의 쿼리 매개변수를 얻는 객체와 업데이트 하는 함수로 이루어져 있음!(여기서는 함수를 사용하지 않기때문에 할당하지 않음)
  const [searchParams] = useSearchParams();
  // 매개변수 객체에서 값을 가져오는 메서드 get 이용
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

/* const [isLogin, setIsLogin] = useState(true);

function switchAuthHandler() {
  setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
} */