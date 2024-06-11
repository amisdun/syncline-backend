import { Post } from "../../models/postModel.js";
import mongodb from "mongodb"

export const updatePost = async (id, details) => {
    console.log(id)
    const post = await Post.findByIdAndUpdate(new mongodb.ObjectId(id),{...details},{ new: true });
    return post;
};
