import {
    errorResponse,
    successResponse,
  } from "../../serverResponse/response.js";
import { getPosts } from "../../services/posts/getPosts.js";
  
  export const getPostsController = async (req, res) => {
    try {
      const posts = await getPosts(req.user._id);
      return successResponse(res, { data: posts }, "success");
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };
  