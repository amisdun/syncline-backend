import { User } from "../../models/userModel.js";
import { compareHash } from "./hashPassword.js";
import { signToken } from "./signToken.js";

export const userExist = async (email) => {
  const user = await User.findOne({ email });
  if (!user && !user?._id) throw new Error("User not found");
  return user;
};

export const logInUser = async (loginDetails) => {
  const { email, password } = loginDetails;
  const user = await userExist(email);
  await compareHash(user?.password, password);
  const token = signToken(user.toJSON());
  const loggedInUser = await User.findByIdAndUpdate(
    user?._id,
    {
      isLoggedIn: true,
      token,
      lastLogin: new Date().toISOString(),
    },
    { new: true }
  ).select("token _id");
  return loggedInUser;
};
