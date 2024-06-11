import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { createPost } from "../../services/posts/createPost.js";

export const createPostsController = async (req, res) => {
  try {
    const details = req.body;
    details.user = req.user._id;
    const post = await createPost(details);
    return successResponse(res, { data: post }, "");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
