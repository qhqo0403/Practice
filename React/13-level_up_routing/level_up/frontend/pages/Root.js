import { Outlet/* , useNavigation */ } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  // useNavigaion을 사용해서 라우트가 전환되는 상태를 나타낼 수 있음.
  /* const navigation = useNavigation(); */
  
  return(
    <>
      <MainNavigation />
      <main>
        <Outlet />
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
      </main>
    </>
  )
}

export default RootLayout;