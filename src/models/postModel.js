import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    user: {
      required: true,
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    content: 
      {
        required: true,
        type: String,
    },
    image: {
      required: true,
      type: String
    },
    likes: [
      {
        required: false,
        ref: "Like",
        type: Schema.Types.ObjectId,
      }
    ]
  },
  { timestamps: true }
);

export const Post = model("Post", PostSchema);
