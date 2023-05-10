import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({request}) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  // 잘못된 url을 입력했을 때의 오류검증
  if (mode !== 'login' && mode !== 'signup') {
    throw json({message: 'Unsupported mode.'}, {status: 422});
  };

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });
  // 입력오류 혹은 유효하지 않은 자격증명으로 로그인하려는 경우 백엔드에서 설정한 오류 출력
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({message: 'Could not authenticate user.'}, {status: 500});
  }

  return redirect('/');
}