const { Router } = require("express");
const { UserController } = require("../controller/user.controller.js");

const createUserRouter = ({ userModel }) => {
  const router = Router();

  const userController = new UserController({ userModel });

  router.get("/", userController.getAll);
  router.post("/", userController.create);
  router.patch("/:userId", userController.update);
  router.delete("/", userController.getAll);

  return router;
};


module.exports = { createUserRouter }