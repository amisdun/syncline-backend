export const documentAlreadyExist = async (model, queryData) => {
  const document = await model.findOne(queryData);
  if (document && document?._id) {
    throw new Error("username or email already exist");
  }
};
