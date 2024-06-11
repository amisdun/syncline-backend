import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { updatePost } from "../../services/posts/updatePosts.js";

export const updatePostController = async (req, res) => {
  try {
    const details = req.body;
   
    await updatePost(details);
    return successResponse(res, {}, "updated");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
