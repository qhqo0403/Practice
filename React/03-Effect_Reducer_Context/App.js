import React, { useContext }/* , { useEffect, useState } */ from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
/*   const [isLoggedIn, setIsLoggedIn] = useState(false); */

/*   useEffect(() => {
    const logInfo = localStorage.getItem('isLoggedIn');

    if (logInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []); */
  
/*   const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }; */

  return (
/*     <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>    </AuthContext.Provider> */
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
