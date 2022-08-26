import { Router } from "express";
import { authenticate } from "../auth/userAuth.js";
import { getRankController } from "../controllers/rankMovies/get.ranks.js";
import { createRankController } from "../controllers/rankMovies/post.rank.js";
const router = Router();

// user route for CRUD
router.get("/ranks", authenticate, getRankController);
router.post("/ranks", authenticate, createRankController);

export default router;
