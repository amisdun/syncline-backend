import { List } from "../../models/listModel.js";

export const createList = async (details) => {
  const { name, user } = details;
  let list = await List.findOne({ name, user });
  if (!list) {
    list = await List.create(details);
    return list;
  }
  throw new Error("List with name already exist");
};
