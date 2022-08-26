import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { deleteList } from "../../services/list/deleteList.js";

export const deleteListController = async (req, res) => {
  try {
    await deleteList(req.params.id);
    return successResponse(res, {}, "success");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
