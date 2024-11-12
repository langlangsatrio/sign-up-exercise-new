"use client";

import { callAPI } from "@/config/axios";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useEffect } from "react";
import { getPostList, setPost } from "@/lib/redux/features/postSlice";

import * as React from "react";

interface DetailProps {
  params: Promise<{ slug: string }>;
}

const Detail: React.FunctionComponent<DetailProps> = ({ params }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, []);
  const selector = useAppSelector((state) => state.userPostReducer);
  console.log("ini selector", selector[params.slug]);
  const detailPost = selector[params.slug];

  // const [detailPosts, setDetailPosts] = React.useState<any>(null);
  // const getDetailPosts = async () => {
  //   try {
  //     const slug = (await params).slug;
  //     const response = await callAPI.get(`posts?id=${slug}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // React.useEffect(() => {
  //   getDetailPosts();
  // }, []);

  return <div>{detailPost.title}</div>;

  // return selector.map((value, item) => (
  //   <div key={item}>
  //     <div className="p-10">
  //       <h1 className="text-xl">
  //         Hi, ini title dari post yang berhasil aku retrieve: {value}
  //       </h1>
  //       <br />
  //       <p className="text-lg">{value}</p>
  //     </div>
  //   </div>
  // ));

  // if (!detailPosts) {
  //   return <p className="text-7xl">Loading..</p>;
  // }

  // return (
  //   <div>
  //     <p className="text-3l">Post ID: {detailPosts?.title}</p>
  //   </div>
  // );
};

export default Detail;
