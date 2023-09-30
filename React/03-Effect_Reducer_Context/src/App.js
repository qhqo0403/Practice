import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLog = localStorage.getItem('isLoggedIn');

    if (userLog === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  // useEffect를 사용하지 않고 변수로 로컬스토리지의 데이터를 가져와서 저장하는 방식은 무한루프에 빠지게 됨. -> 컴포넌트가 실행되고 로컬스토리지 확인하고 state 변경되고 다시 컴포넌트가 재실행
  // 의존성배열이 비어있는 경우에는 컴포넌트가 처음 실행될 때 useEffect가 한번만 실행됨

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
