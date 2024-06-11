import { User } from "../../models/userModel.js";
import { hashPassword } from "./hashPassword.js";
import { documentAlreadyExist } from "../../utils/documentAlreadyExist.js";
import { signToken } from "./signToken.js";
import passwordComplexity from "joi-password-complexity";
import { complexityOption, label } from "../../utils/passwordPolicy.js";

export const registerUser = async (userData) => {
  const { password, email, userName} = userData;
  const passwordCheck = passwordComplexity(complexityOption, label).validate(
    password
  );
  if (passwordCheck.error) throw passwordCheck.error.message;
  await documentAlreadyExist(User, { $or: [ { email }, { userName } ] });
  const hashedPassword = await hashPassword(password);
  userData.password = hashedPassword;
  const user = await User.create(userData);
  const { password: pass, ...rest } = user.toJSON()
  const token = signToken(user.toJSON());
  
  return { token, user: { ...rest } };
};
