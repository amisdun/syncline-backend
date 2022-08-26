import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { createList } from "../../services/list/createList.js";

export const createListController = async (req, res) => {
  try {
    const details = req.body;
    details.user = req.user._id;
    const token = await createList(details);
    return successResponse(res, { data: token }, "");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
