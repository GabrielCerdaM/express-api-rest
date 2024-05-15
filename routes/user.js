import { Router } from "express";
import { UserController } from "../controller/user.js";

export const createUserRouter = ({ userModel }) => {
  const router = Router();

  const userController = new UserController({ userModel });

  router.get("/", userController.getAll);

  return router;
};
