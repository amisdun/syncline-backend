import { List } from "../../models/listModel.js";
import { Movie } from "../../models/movieModel.js";
import { addMovie } from "../movies/addMovie.js";

export const addMovieToList = async (details) => {
  const { listId, ...rest } = details;
  const list = await List.findById(listId);
  if (!list) {
    throw new Error("List not found, Please create a list");
  }
  const movie = await addMovie(rest);
  list.movies.push(movie._id);
  await list.save();
  return list.populate("movies");
};
