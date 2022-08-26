import { MovieRank } from "../../models/rankModel.js";
import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { createMoviesRanks } from "../../services/rankMovies/createRank.js";

export const createRankController = async (req, res) => {
  try {
    const details = req.body;
    await createMoviesRanks(details, req.user._id);
    const ranks = await MovieRank.find({ user: req.user._id }).populate(
      "movie"
    );
    return successResponse(res, { data: ranks }, "success");
  } catch (error) {
    console.trace(error);
    return errorResponse(res, error.message);
  }
};
