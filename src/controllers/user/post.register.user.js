import { errorResponse, successResponse } from "../../serverResponse/response.js";
import { registerUser } from "../../services/user/registerUser.js";

export const registerUserController = async (req, res) => {
  try {
    const { token, user } = await registerUser(req.body);
    const data = {
      token,
      user
    };
    return successResponse(res, data, "OK", 201);
  } catch (error) {
    return errorResponse(res, error?.message || error, 400);
  }
};
