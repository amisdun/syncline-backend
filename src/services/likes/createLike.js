import { Like } from "../../models/likesModel.js";
import { Post } from "../../models/postModel.js";

export const likeAPost = async (postId, user) => {
  const like = await Like.create({ likedBy: user })
  const post = await Post.findById(postId)

  if (!post) throw new Error("Post Not found")
  post.likes.push(like)
  await post.save()

  return like
  
};
