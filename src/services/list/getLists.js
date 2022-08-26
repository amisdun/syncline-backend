import { List } from "../../models/listModel.js";

export const getLists = async (user) => {
  const list = await List.find({ user })
    .populate("movies")
    .populate("user", "email firstName");
  if (Array.isArray(list) && list.length) {
    return list;
  }
  throw new Error("No list found");
};
