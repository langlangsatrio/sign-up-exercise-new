"use client";

import { useState, useEffect } from "react";
import PostDisplay from "./PostDisplay";
import { callAPI } from "@/config/axios";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { getPostList, setPost } from "@/lib/redux/features/postSlice";

interface IPostDisplayCollection {}

const PostDisplayCollection: React.FC<IPostDisplayCollection> = () => {
  const dispatch = useAppDispatch();

  //dispatchdata
  // const dispatchPost = async () => {
  //   const response = await callAPI("/posts");
  //   console.log("ini adalah response.data", response.data);
  //   dispatch(setPost(response.data)); //store data to action
  // };
  // useEffect(() => {
  //   dispatchPost();
  // }, []);

  //Cara alternatif -----
  useEffect(() => {
    dispatch(getPostList());
  }, []);
  // -----

  //fetchdata
  const selector = useAppSelector((state) => state.userPostReducer);
  console.log("ini adalah selector:", selector);
  const getDataSelector = [...selector];
  console.log("ini adalah getdataselector:", getDataSelector);

  const router = useRouter();

  // const [data, setData] = useState<any[]>([]);
  // const getData = async () => {
  //   try {
  //     const response = await callAPI.get("/posts");
  //     setData(response.data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return getDataSelector.map((value, item) => {
    return (
      <PostDisplay
        key={item}
        avatar={value?.userId}
        title={value?.title}
        post={value?.post}
        // onClick={() => router.push(`/post/detail?id=${value.id}`)}
        onClick={() => router.push(`/post/${value?.userId}`)}
      />
    );
  });
};

export default PostDisplayCollection;
