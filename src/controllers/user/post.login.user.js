import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { logInUser } from "../../services/user/loginUser.js";

export const logInUserController = async (req, res) => {
  try {
    const token = await logInUser(req.body);
    return successResponse(res, { data: token }, "LogIn successful");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
