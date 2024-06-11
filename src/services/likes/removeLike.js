import { Like } from "../../models/likesModel.js";
import { Post } from "../../models/postModel.js";

export const removeLike = async (id) => {
  const like = await Like.findByIdAndDelete(id)
    if (!like) throw new Error("Resource not found")
    return like
};
