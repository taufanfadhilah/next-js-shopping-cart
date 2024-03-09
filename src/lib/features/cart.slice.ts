import { Item } from "@/types/item";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  item: Item;
  qty: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartState[],
  reducers: {
    addToCart(state, action: PayloadAction<CartState>) {
      state.push(action.payload);
    },
    removeCart(state, action: PayloadAction<number>) {
      state = state.splice(action.payload, 1);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice;
