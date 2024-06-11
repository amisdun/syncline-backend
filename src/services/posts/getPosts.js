import { Post } from "../../models/postModel.js";

export const getPosts = async (user) => {
  const post = await Post.find({user})
    .populate("likes")
  return post

};
