import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { likeAPost } from "../../services/likes/createLike.js";

export const createLikeController = async (req, res) => {
  try {
    const id = req.params.id
    const like = await likeAPost(id, req.user._id);
    return successResponse(res, { data: movies }, "success");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
