import {
    errorResponse,
    successResponse,
  } from "../../serverResponse/response.js";

import { removeLike } from "../../services/likes/removeLike.js";
  
  export const deleteLikeController = async (req, res) => {
    try {
      const id = req.params.id
      const like = await removeLike(id, req.user._id);
      return successResponse(res, { data: like }, "success");
    } catch (error) {
      return errorResponse(res, error.message);
    }
  };
  