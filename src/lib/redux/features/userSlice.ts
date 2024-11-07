import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  username: string;
  email: string;
  name: string;
  isAuth?: boolean;
}

const initialData: IUser = {
  id: "",
  username: "",
  email: "",
  name: "",
};

// Define slice config to create function reducer and action
const userSlice = createSlice({
  name: "user",
  initialState: { ...initialData },
  reducers: {
    setSignIn: (initialState, action) => {
      //menyimpan data ke global state
      console.log("Check action redux from user sign in: ", action);
      return { ...action.payload };
    },
    setSignOut: () => {
      return { ...initialData };
    },
  },
});

//Export Action
//Properti actions mereturn function reducers
export const { setSignIn, setSignOut } = userSlice.actions;

//Export Reducer
//Me-return data ke store
export default userSlice.reducer;
