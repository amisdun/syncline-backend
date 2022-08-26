import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { logOutUser } from "../../services/user/logoutUser.js";

export const logOutUserController = async (req, res) => {
  try {
    const { _id } = req.user;
    await logOutUser(_id);
    return successResponse(res, {}, "loggedOut successful");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
