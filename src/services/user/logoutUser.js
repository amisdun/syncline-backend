import { User } from "../../models/userModel.js";

export const logOutUser = async (userId) => {
  await User.findByIdAndUpdate(userId, { isLoggedIn: false, token: "" });
};
