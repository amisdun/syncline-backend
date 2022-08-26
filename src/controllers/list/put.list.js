import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { addMovieToList } from "../../services/list/addMovieToList.js";

export const addMovieToListController = async (req, res) => {
  try {
    const details = req.body;
    details.listId = req.params.id;
    details.user = req.user._id;
    await addMovieToList(req.body);
    return successResponse(res, {}, "movie added to list");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
