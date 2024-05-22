import { Router } from "express";
import helloRouter from "./hello.routes";
import userRouter from "./users.routes";
import tweetRouter from "./tweet.routes";


const router=Router();
router.use('/hello',helloRouter);
router.use('/user',userRouter);
router.use('/tweet',tweetRouter);

export default router;
