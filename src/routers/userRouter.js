import { Router } from "express";
import { authenticate } from "../auth/userAuth.js";
import { logOutUserController } from "../controllers/user/patch.logout.user.js";
import { logInUserController } from "../controllers/user/post.login.user.js";
import { registerUserController } from "../controllers/user/post.register.user.js";
import { logInValidator } from "../validators/loginValidator.js";
import { registerValidator } from "../validators/registerValidators.js";
import { ValidationChecker } from "../validators/validatorChecker.js";
const router = Router();

// user route for CRUD
router.post("/login", logInValidator, ValidationChecker, logInUserController);
router.post(
  "/register",
  registerValidator,
  ValidationChecker,
  registerUserController
);
router.post("/logout", authenticate, logOutUserController);

export default router;
