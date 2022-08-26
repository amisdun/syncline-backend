import {
  errorResponse,
  successResponse,
} from "../../serverResponse/response.js";
import { getMovies } from "../../services/movies/getMovies.js";

export const getMoviesController = async (req, res) => {
  try {
    const movies = await getMovies();
    return successResponse(res, { data: movies }, "success");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
