// cart와 관련된 slice
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addItemToCart(state, action) {
      // action을 통해서 전달되는 인자의 이름은 무조건 payload!
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        // 바로 푸시가 가능한건 toolkit이기 때문. 오리지널 리덕스에서는 안됨!
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1){
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
