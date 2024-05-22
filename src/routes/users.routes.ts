 import { Router } from "express";
 import { getUserController,createUserController,updateUserController,deleteUserController } from "../controller/user.controller";

 const userRouter=Router();

 userRouter.get("/:userId",getUserController);
 userRouter.post("/",createUserController);
 userRouter.delete("/:userId",deleteUserController);
 userRouter.put("/",updateUserController);

 export default userRouter;