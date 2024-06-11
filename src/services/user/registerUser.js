import { User } from "../../models/userModel.js";
import { hashPassword } from "./hashPassword.js";
import { documentAlreadyExist } from "../../utils/documentAlreadyExist.js";
import { signToken } from "./signToken.js";
import passwordComplexity from "joi-password-complexity";
import { complexityOption, label } from "../../utils/passwordPolicy.js";

export const registerUser = async (userData) => {
  const { password, email } = userData;
  const passwordCheck = passwordComplexity(complexityOption, label).validate(
    password
  );
  if (passwordCheck.error) throw passwordCheck.error.message;
  await documentAlreadyExist(User, { email });
  const hashedPassword = await hashPassword(password);
  userData.password = hashedPassword;
  const user = await User.create(userData);
  const token = signToken(user.toJSON());
  
  return { token, user: newUser };
};
