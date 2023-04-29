// http 요청을 위한 액션 생성자 파일
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch('https://food-order-app-71988-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

      if (!response.ok) {
        throw new Error('Could not fetch cart data.');
      }

      const data = await response.json();

      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed.'
      }));
    }
  }
}

// 함수를 반환하는 Thunk! 리듀서가 아니라 자바스크립트 함수로 만들어서 액션 생성자로 사용함
export const sendCartData = cart => {
  return async dispatch => {
    dispatch(uiActions.showNotification({
      status: 'pending...',
      title: 'Sending...',
      message: 'Sending cart data!'
    }));

    const sendRequest = async () => {
      const response = await fetch('https://food-order-app-71988-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {method: 'PUT', body: JSON.stringify(cart)});

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    }

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data successfully!'
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed.'
      }));
    }
  }
};