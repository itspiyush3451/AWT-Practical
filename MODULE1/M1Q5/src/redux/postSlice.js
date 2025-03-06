import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [] },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addLike: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) post.likes += 1;
    },
    addComment: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload.id);
      if (post) post.comments.push(action.payload.comment);
    },
  },
});

export const { setPosts, addLike, addComment } = postSlice.actions;
export default postSlice.reducer;
