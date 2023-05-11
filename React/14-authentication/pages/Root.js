import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // loader 가 정의된 라우트에서 사용하기 때문에 RouteLoaderData를 쓰지 않음. 가장 먼저 로딩되는 라우트기 때문에 자동 로그아웃의 기준은 root route로
  const token = useLoaderData();
  const submit = useSubmit()
  // 1시간이 지나면 자동으로 로그아웃
  useEffect(() => {
    // 토큰이 없다면 실행X
    if (!token) {
      return;
    }
    // 토큰이 만료되었을 때 로그아웃 실행
    if (token === 'EXPIRED') {
      submit(null, {action: '/logout', method: 'post'});
      return;
    }
    // 렌더링되고 처음 실행될 때 토큰이 있다면 설정된 시간을 가져옴
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    // 토큰이 있다면 카운트다운 실행
    setTimeout(() => {
      // 전달할 데이터는 없고 logout 라우트만 트리거
      submit(null, {action: '/logout', method: 'post'})
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
