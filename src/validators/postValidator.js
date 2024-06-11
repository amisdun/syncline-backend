import { check } from "express-validator";

export const postValidator = [
  check("image")
    .notEmpty()
    .withMessage("image cannot be empty")
    .isBase64()
    .withMessage("Image data needs to be a base64 string"),
  check("content")
    .notEmpty()
      .withMessage("content must be provided")
    ,
    check("title")
    .notEmpty()
    .withMessage("title must be provided")
];
