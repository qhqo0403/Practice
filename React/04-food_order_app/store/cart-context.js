import React from "react";

const CartContext = React.createContext({
  /* 사용하지는 않더라도 초기값 설정 */
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;