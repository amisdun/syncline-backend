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
    userName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
