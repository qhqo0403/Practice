/* 이 컴포넌트의 목표는 CartContext의 데이터를 관리하고 그 컨텍스트를 접근하는 컴포넌트에 제공하기 위함! */
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
    /* 장바구니에 기존 항목이 들어있는 경우를 판단하기 위한 작업 */
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    
    if (existingCartItem) {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; /* overwriting */
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {items: updatedItems, totalAmount: updatedTotalAmount}
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - action.item.price;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => state.item.id !== action.id);
    } else {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {items: updatedItems, totalAmount: updatedTotalAmount}
  }

  return defaultCartState;
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  }
  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id});
  }
  /* helper object */
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider;