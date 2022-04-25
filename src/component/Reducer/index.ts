import { createSlice } from "@reduxjs/toolkit";

// import { useSelector } from "react-redux";
// import some link for fetch

export interface UserInfoState {
  id: Number;
  username: string;
  email: string;
}

const initialState: UserInfoState[] = [];

// export const userAsync = createAsyncThunk(
//   // "counter/fetchCount" link,
//   "",
//   async () => {
//     //   const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     //   return response.data;
//   }
// );

export const userInfo = createSlice({
  name: "user info",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});
export const { addUser } = userInfo.actions;

export default userInfo.reducer;
