import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isLoggedIn: {
      type: Boolean,
      required: true,
      default: false,
    },
    lastLogin: {
      type: Date,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
