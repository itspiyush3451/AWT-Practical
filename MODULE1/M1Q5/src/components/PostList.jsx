import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="p-4">
      {posts.length === 0 ? <p>No posts available.</p> : posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
