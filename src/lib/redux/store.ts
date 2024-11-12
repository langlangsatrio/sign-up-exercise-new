import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import userPostReducer from "./features/postSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      //type reducer config here
      userReducer,
      userPostReducer,
    },
  });
};

// Define type store

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
