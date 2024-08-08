import rootReducer from "./slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const isProd = process.env?.REACT_APP_ENV === "production";

const store = configureStore({
  reducer: rootReducer,
  devTools: !isProd,
});

// Note: TypeScript-specific types are removed

export const dispatch = store.dispatch;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
