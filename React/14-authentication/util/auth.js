import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  // 토큰이 생성되고 유효한 1시간에서 현재 시간 빼주기 -> 음수가 되면 토큰이 만료
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export const getAuthToken = () => {
  const token = localStorage.getItem('token');
  // 토큰이 없다면 유효시간 확인 X
  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export const tokenLoader = () => {
  return getAuthToken();
}

//토큰없이 수동으로 경로를 입력해서 라우트에 접근을 제어, 보호하려는 라우트에 loader 함수로 추가해주기
export const checkAuthLoader = () => {
  const token = getAuthToken();

  if(!token) {
    return redirect('/auth');
  }
  // loader 함수는 반드시 데이터를 반환해야함! 반환하는 데이커가 없다면 null이라도 반환해야함
  return null;
}