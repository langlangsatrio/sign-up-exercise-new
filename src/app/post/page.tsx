"use client";

import UsercardCollection from "@/components/UsercardCollection";
import PostDisplayCollection from "@/components/PostDisplayCollection";
import CreatePost from "@/components/CreatePost";

const PostPage = () => {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-end px-20 py-10">
        <div className="w-full px-20 py-3">
          <div className="-ml-8 mb-16">
            <CreatePost />
          </div>
          <PostDisplayCollection />
        </div>
        <div className="w-96 h-fit">
          <UsercardCollection />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
