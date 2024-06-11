import { Post } from "../../models/postModel.js";

export const createPost = async (details, user) => {
    const post = await Post.create(details);
    return post;
};
