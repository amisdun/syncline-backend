import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { updatePost } from "../../services/posts/updatePosts.js";

export const updatePostController = async (req, res) => {
  try {
    const details = req.body;
    const {id} = req.params
    const post = await updatePost(id,details);
    return successResponse(res, {data: post.toJSON()}, "updated");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
