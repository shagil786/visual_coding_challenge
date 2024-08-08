import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import characterReducer from "./characterSlice";
import eventReducer from "./eventSlice";
import listReducer from "./listSlice";

// Combine reducers into a single rootReducer
const rootReducer = combineReducers({
  app: appReducer,
  character: characterReducer,
  events: eventReducer,
  list: listReducer,
});

export default rootReducer;
