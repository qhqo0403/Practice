import { useState } from "react";
import HomeContent from "../components/HomeContent";
import { auth } from "../fbase";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(auth.currentUser);

  return (
    <>
      {isLogin ? <HomeContent /> : <p>로그인 해주세요!</p>}
    </>
  )
}

export default HomePage;