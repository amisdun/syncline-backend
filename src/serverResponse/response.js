export const errorResponse = (res, error, code = 500) => {
  return res.json({
    error: error,
    data: null,
  });
};

export const successResponse = (res, data = null, msg = "OK", code = 200) => {
  return res.json({
    success: true,
    message: msg,
    ...data,
  });
};
