import mongoose from "mongoose";

const { Schema, model } = mongoose;

const likeSchema = new Schema(
  {
    likedBy: {
      required: true,
      ref: "User",
      type: Schema.Types.ObjectId,
    }
  },
  { timestamps: true }
);

export const Like = model("Like", likeSchema);
