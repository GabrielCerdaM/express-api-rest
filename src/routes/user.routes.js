import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

export const createUserRouter = ({ userModel }) => {
  const router = Router();

  const userController = new UserController({ userModel });

  router.get("/", userController.getAll);
  router.post("/", userController.create);
  router.patch("/:userId", userController.update);
  router.delete("/", userController.getAll);

  return router;
};
