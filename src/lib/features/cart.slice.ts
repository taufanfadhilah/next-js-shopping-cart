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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice;
