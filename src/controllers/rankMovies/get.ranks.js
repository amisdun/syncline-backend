import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { getMoviesRanks } from "../../services/rankMovies/getRanks.js";

export const getRankController = async (req, res) => {
  try {
    const ranks = await getMoviesRanks(req.body);
    return successResponse(res, { data: ranks }, "success");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
