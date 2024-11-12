import { callAPI } from "@/config/axios";
import { createSlice } from "@reduxjs/toolkit";

// interface IPost {
//   userId: string;
//   id: string;
//   title: string;
//   post: string;
// }

// const initialData: IPost = {
//   userId: "",
//   id: "",
//   title: "",
//   post: "",
// };

const userPost = createSlice({
  name: "userPost",
  initialState: [{}],
  reducers: {
    setPost: (initialState, action) => {
      return [...action.payload];
    },
  },
});

export const { setPost } = userPost.actions;

export default userPost.reducer;

//callAPIFunction
export const getPostList = () => {
  return async (dispatch: any) => {
    try {
      const res = await callAPI.get("/posts");
      dispatch(setPost(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};
