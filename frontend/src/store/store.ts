import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({ content: contentReducer });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

type DispatchF = () => RootDispatch;
export const useAppDispatch: DispatchF = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
