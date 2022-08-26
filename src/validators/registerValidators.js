import { check } from "express-validator";

export const registerValidator = [
  check("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email format"),
  check("password")
    .notEmpty()
    .withMessage("password must be provided")
    .isString()
    .withMessage("password must be of type string"),
  check("firstName")
    .notEmpty()
    .withMessage("first name must be provided")
    .isString()
    .withMessage("first name must be of type string"),
  check("lastName")
    .notEmpty()
    .withMessage("last name must be provided")
    .isString()
    .withMessage("last name must be of type string"),
  check("dateOfBirth")
    .notEmpty()
    .withMessage("date of birth must be provided")
    .toDate()
    .withMessage("Invalid date format"),
];
