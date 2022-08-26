import { Router } from "express";
import { authenticate } from "../auth/userAuth.js";
import { deleteListController } from "../controllers/list/del.list.js";
import { getListController } from "../controllers/list/get.list.js";
import { createListController } from "../controllers/list/post.list.js";
import { addMovieToListController } from "../controllers/list/put.list.js";

const router = Router();

// user route for CRUD
router.delete("/list/:id", authenticate, deleteListController);
router.post("/list", authenticate, createListController);
router.get("/list", authenticate, getListController);
router.put("/list/:id", authenticate, addMovieToListController);

export default router;
