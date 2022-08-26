import { Router } from "express";
import { authenticate } from "../auth/userAuth.js";
import { getMoviesController } from "../controllers/movies/get.movies.js";

const router = Router();

// user route for CRUD
router.get("/movies", authenticate, getMoviesController);

export default router;
