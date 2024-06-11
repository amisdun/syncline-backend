import { Post } from "../../models/postModel.js";

export const likeAPost = async (postId, user) => {
  const post = await Post.findById(postId)
  if (post.likes.includes(user)) {
    throw new Error("Post already liked by user")
  }

  if (!post) throw new Error("Post Not found")
  post.likes.push(user)
  await post.save()

  return { like: like.toJSON(), post:  post.toJSON()  }
  
};
