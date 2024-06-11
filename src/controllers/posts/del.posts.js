import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { deletePost } from "../../services/posts/deletePost.js";


export const deletePostController = async (req, res) => {
  try {
    const id = req.params.id
    await deletePost(id)
    return successResponse(res, {}, "success");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
