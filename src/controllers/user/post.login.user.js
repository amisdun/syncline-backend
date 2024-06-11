import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { logInUser } from "../../services/user/loginUser.js";

export const logInUserController = async (req, res) => {
  try {
    const data = await logInUser(req.body);
    return successResponse(res, { data: data }, "LogIn successful");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
