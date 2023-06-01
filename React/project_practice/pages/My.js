import { Outlet } from "react-router-dom";

import MyNavigation from "../components/MyNavigation";

const MyPage = () => {
  return (
    <>
      <MyNavigation />
      <Outlet />
    </>
  )
}

export default MyPage;