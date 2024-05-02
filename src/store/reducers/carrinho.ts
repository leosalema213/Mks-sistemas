import { Product } from "@/interface/Produtos";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: Product[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product === undefined) {
        if (!action.payload.quantidade) {
          action.payload.quantidade = 1;
        }
        state.items.push(action.payload);
      } else {
        product.quantidade += 1;
      }
    },
    removeAll: (state, action: PayloadAction<number>) => {
      const product = state.items.filter(
        (item) => item.id !== action.payload
      );
      let productSelected = product.find((p) => (p.id = action.payload));

      if (productSelected) {
        productSelected.quantidade = 0;
      }
      state.items = product;
    },
    remove: (state, action: PayloadAction<number>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product?.quantidade) {
        if (product.quantidade >= 1) {
          product.quantidade -= 1;
        }
        if(product.quantidade < 1) {
          state.items = state.items.filter(
            (item) => item.id !== product.id
          );
        }
      }
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, removeAll, close, open, remove } =
cartSlice.actions;

export default cartSlice.reducer;
