import { useDispatch } from "react-redux";
import { addLike, addComment } from "../redux/postSlice";
import { useState } from "react";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleLike = () => {
    dispatch(addLike(post.id));
  };

  const handleComment = () => {
    if (comment.trim()) {
      dispatch(addComment({ id: post.id, comment }));
      setComment("");
    }
  };

  return (
    <div className="border p-4 rounded shadow-lg mb-4">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-gray-600">{post.body}</p>
      <div className="mt-2">
        <button onClick={handleLike} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
          👍 {post.likes}
        </button>
      </div>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Add a comment..."
          className="border p-1 rounded w-full"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleComment} className="bg-green-500 text-white px-3 py-1 mt-2 rounded">
          Comment
        </button>
      </div>
      <ul className="mt-2">
        {post.comments.map((c, index) => (
          <li key={index} className="text-gray-700">💬 {c}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
