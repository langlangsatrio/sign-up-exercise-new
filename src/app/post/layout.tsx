import { ReactNode } from "react";
import Login from "./page";
import { Metadata } from "next";
import { resolve } from "path";
import AuthGuard from "@/guard/AuthGuard";

interface ISignInLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Post List",
  description: "Enter your details",
};

const PostListLayout: React.FC<ISignInLayout> = async ({ children }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div>
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
};

export default PostListLayout;
