import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import userInfo from "../component/Reducer";

export const store = configureStore({
  reducer: {
    userDetails: userInfo,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
