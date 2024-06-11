"use strict";

import { mongdbConnection } from "./src/dbConnection/mongodb.js";
import bodyParser from "body-parser";
import restify from "restify";

import dotenv from "dotenv"
import { logInUserController } from "./src/controllers/user/post.login.user.js";
import { registerUserController } from "./src/controllers/user/post.register.user.js";
import { createPostsController } from "./src/controllers/posts/post.posts.js";
import { getPostController } from "./src/controllers/posts/get.post.js";
import { getPostsController } from "./src/controllers/posts/get.posts.js";
import { deletePostController } from "./src/controllers/posts/del.posts.js";
import { updatePostController } from "./src/controllers/posts/put.post.js";
import { createLikeController } from "./src/controllers/likes/post.like.js";
import { authenticate } from "./src/auth/userAuth.js";
import corsMiddleware from "restify-cors-middleware2";
dotenv.config()
const app = restify.createServer();

const { json, urlencoded } = bodyParser;

mongdbConnection.db_connection();

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
  })


app.pre(cors.preflight)
app.use(cors.actual);
app.use(json());

app.get("/v1", (req, res, next) => {
    res.json({message: "hello"})
})
// user route
app.post({
    url: "/v1/user/auth"}, logInUserController)
app.post("/v1/user/sign-up",registerUserController)

// post routes
app.post({
    url: "/v1/post"
    }, authenticate ,createPostsController)
app.get({ url: "/v1/post/:id", }, getPostController)
app.get({ url: "/v1/posts" }, authenticate, getPostsController)
app.del({ url: "/v1/post/:id" }, authenticate, deletePostController)
app.put({ url: "/v1/post/:id" }, authenticate, updatePostController)

//like routes
app.get({ url: "/v1/like/:postId" }, authenticate, createLikeController)
app.del({url: "/v1/like/:id", }, authenticate, deletePostController)


app.use(urlencoded({ extended: false }));

app.listen(8000)
