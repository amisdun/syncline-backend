import { Post } from "../../models/postModel.js";

export const getPost = async (id) => {
  const post = await Post.findById(id)
  if(!post) throw new Error("Post not found")
  return post
};
