import { Post } from "../../models/postModel.js";

export const getPosts = async (user) => {
  const post = await Post.find({user})
    .populate({ path: "likes", select: "-password" })
  return post

};
