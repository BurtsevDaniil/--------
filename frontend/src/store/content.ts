import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemObject, ShopObject, StockObject } from "../const/types";

export interface ContentState {
  items?: ItemObject[];
  shops?: ShopObject[];
  stocks?: StockObject[];
}

export const initialState: ContentState = {
  items: undefined,
  shops: undefined,
  stocks: undefined,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setStoredItems: (state, action: PayloadAction<ItemObject[]>) => {
      state.items = action.payload;
    },
    setStoredShops: (state, action: PayloadAction<ShopObject[]>) => {
      state.shops = action.payload;
    },
    setStoredStocks: (state, action: PayloadAction<StockObject[]>) => {
      state.stocks = action.payload;
    },
  },
});

export const { setStoredItems, setStoredShops, setStoredStocks } =
  contentSlice.actions;

export default contentSlice.reducer;
