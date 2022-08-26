import { Movie } from "../../models/movieModel.js";

export const addMovie = async (details) => {
  const movie = await Movie.create(details);
  return movie;
};
