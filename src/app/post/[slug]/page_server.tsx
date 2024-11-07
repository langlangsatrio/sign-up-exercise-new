//Server component

import { callAPI } from "@/config/axios";
import axios from "axios";

interface DetailProps {
  params: { slug: string };
}

const PostDetailPage: React.FunctionComponent<DetailProps> = async ({
  params,
}) => {
  const res = await callAPI.get(`posts?id=${params.slug}`);
  console.log(params.slug);
  return (
    <div>
      <p className="text-3l">Post ID: {res.data[0].title}</p>
    </div>
  );
};

export default PostDetailPage;
