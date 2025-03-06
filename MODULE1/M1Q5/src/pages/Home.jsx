import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../redux/postSlice";
import axios from "axios";
import PostList from "../components/PostList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const posts = res.data.map(post => ({ ...post, likes: 0, comments: [] }));
        dispatch(setPosts(posts));
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Social Media Dashboard</h1>
      <PostList />
    </div>
  );
};

export default Home;
