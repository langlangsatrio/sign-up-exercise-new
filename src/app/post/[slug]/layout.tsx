import { callAPI } from "@/config/axios";
import { Metadata } from "next";
import { ReactNode } from "react";

interface ISignInLayout {
  children: ReactNode;
}

type PropsParams = {
  params: { slug: string };
};

//Dynamic metadata
export const generateMetadata = async ({
  params,
}: PropsParams): Promise<Metadata> => {
  const slug = (await params).slug;
  const res = await callAPI.get(`/posts?id=${slug}`);
  return {
    title: res.data[0].title,
  };
};

const PostDetailLayout: React.FC<ISignInLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default PostDetailLayout;
