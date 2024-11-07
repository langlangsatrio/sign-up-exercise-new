"use client";

interface IPostDisplay {
  avatar: string;
  title: string;
  post: string;
  onClick(): void;
}
const PostDisplay: React.FC<IPostDisplay> = ({
  avatar,
  title,
  post,
  onClick,
}) => {
  const imgUrl = `https://robohash.org/${avatar}`;
  return (
    <div
      className="relative flex gap-4 bg-slate-100 rounded-lg my-6 py-5 px-6 w-full h-fit hover:bg-slate-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute -left-10 t-0 top-0 h-24 w-24 ">
        <img
          src={imgUrl}
          className="rounded-full shadow-md absolute left-0 top-0 bg-slate-400"
        />
      </div>
      <div className="flex flex-col ml-14">
        <h3 className="font-semibold text-black mb-1">{title}</h3>
        <p className="font-medium text-black">{post}</p>
      </div>
    </div>
  );
};

export default PostDisplay;
