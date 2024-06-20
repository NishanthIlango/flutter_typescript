import { Router } from "express";
import { getUserController, createUserController, deleteUserController, updateUserController } from "../controller/user.controller";

const userRouter = Router();


// Define route paths

userRouter.get("/:userId", getUserController)
userRouter.post("/", createUserController)
userRouter.delete("/:userId", deleteUserController)
userRouter.put("/", updateUserController)

export default userRouter