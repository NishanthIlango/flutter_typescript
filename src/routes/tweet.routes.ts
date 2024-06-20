import { Router } from "express";
import { getTweetController, createTweetController, updateTweetController, deleteTweetController, getAllTweetsController } from "../controller/tweet.controller";

const tweetRouter = Router();


// Define route paths

tweetRouter.get("/:tweetId", getTweetController)
tweetRouter.get("/get/all", getAllTweetsController)
tweetRouter.post("/", createTweetController)
tweetRouter.delete("/:userId", deleteTweetController)
tweetRouter.put("/", updateTweetController)

export default tweetRouter