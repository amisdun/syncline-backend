import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { getLists } from "../../services/list/getLists.js";

export const getListController = async (req, res) => {
  try {
    const lists = await getLists(req.user._id);
    return successResponse(res, { data: lists }, "success");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
