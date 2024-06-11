import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { getPost } from "../../services/posts/getPost.js";

export const getPostController = async (req, res) => {
  try {
    const id = req.params.id
    const post = await getPost(id);
    return successResponse(res, { data: post }, "success");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
