"use client";

import { callAPI } from "@/config/axios";

import * as React from "react";

interface DetailProps {
  params: Promise<{ slug: string }>;
}

const Detail: React.FunctionComponent<DetailProps> = ({ params }) => {
  const [detailPosts, setDetailPosts] = React.useState<any>(null);
  const getDetailPosts = async () => {
    try {
      const slug = (await params).slug;
      const response = await callAPI.get(`posts?id=${slug}`);
      setDetailPosts(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetailPosts();
  }, []);

  if (!detailPosts) {
    return <p className="text-7xl">Loading..</p>;
  }

  return (
    <div>
      <p className="text-3l">Post ID: {detailPosts?.title}</p>
    </div>
  );
};

export default Detail;
