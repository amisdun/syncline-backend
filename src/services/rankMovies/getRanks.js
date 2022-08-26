import { MovieRank } from "../../models/rankModel.js";

export const getMoviesRanks = async (user) => {
  const ranks = await MovieRank.find(user)
    .populate("movie")
    .sort({ rank: 1, _id: 1 });
  return ranks;
};
