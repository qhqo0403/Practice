import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

// 컴포넌트가 재평가 될때마다 초기화 되지 않도록 하기위해 컴포넌트 함수 밖에 선언.
let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  // 데이터를 변환해서 리덕스 저장소로 보내면, 변환 과정이 리덕스 내부에 포함되는 것이 아니라서 특정 부분은 반영이 안될 수 있음. 순서를 바꿔서 데이터 변환과정을 리덕스 내부에서 모두 수행한 후 http요청을 보내는 방식을 활용!
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending...',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));
      const response = await fetch('https://food-order-app-71988-default-rtdb.asia-southeast1.firebasedatabase.app/cart', {method: 'PUT', body: JSON.stringify(cart)});

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
        // 오류알림에 대한 dispatch를 여기에 추가하면 모든 코드상태의 오류를 잡아내지 못하기 때문에 밖으로 이동.
      }
      // 응답된 데이터가 필요한 상황은 아니라서 코멘트아웃!
      /* const responseData = await response.json(); */
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data successfully!'
      }));
    };

    // 처음에 비어있는 데이터가 전송되는 것을 막기위해
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed.'
      }));
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
