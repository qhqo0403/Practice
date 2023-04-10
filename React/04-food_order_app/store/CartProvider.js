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

    const existingCartIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartIndex]

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount}
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
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