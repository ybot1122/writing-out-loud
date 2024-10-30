import { useLoaderData } from "react-router-dom";

type LoaderData = {
  postId: string;
};

function Post() {
  const { postId } = useLoaderData() as LoaderData;
  return <div className="text-xl font-bold">I am a post {postId}</div>;
}

export default Post;
