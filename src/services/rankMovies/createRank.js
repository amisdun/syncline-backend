import { MovieRank } from "../../models/rankModel.js";

export const createMoviesRanks = async (movieRanksDetails, user) => {
  const data = [];
  for (let rank of movieRanksDetails.data) {
    rank.user = user;
    data.push(rank);
  }
  await MovieRank.deleteMany({ user });
  const ranks = await MovieRank.insertMany(data);
  return ranks;
};
