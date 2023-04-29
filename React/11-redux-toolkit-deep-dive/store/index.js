// 저장소 만들기 위한 파일
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    // reducer 메서드만 저장되는것이 아니라 slice 자체가 저장! 하나의 리듀서로 만들어주는 메서드 -> 메서드들은 actions 메서드에 의해 매핑
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;
