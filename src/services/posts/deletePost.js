import { Post } from "../../models/postModel.js";

export const deletePost = async (id) => {
  const post = await Post.findByIdAndDelete(id)
  if (!post) throw new Error("Post not found")
  return post
};
