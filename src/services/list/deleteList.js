import { List } from "../../models/listModel.js";

export const deleteList = async (id) => {
  const list = await List.findById(id);
  if (!list) {
    throw new Error("List not found");
  }
  return await List.deleteOne({ _id: id });
};
