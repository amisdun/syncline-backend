import { Post } from "../../models/postModel.js";

export const updatePost = async (id, details) => {
    const post = await Post.findByIdAndUpdate(id,{...details});
    return post;
};
