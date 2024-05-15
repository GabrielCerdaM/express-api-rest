import express from "express";
import { createUserRouter } from "./routes/user.routes.js";
import { createAuthRouter } from "./routes/auth.routes.js";
import 'dotenv/config'
import { createHomeRouter } from "./routes/home.routes.js";

const PORT = process.env.PORT ?? 8000;

export const createApp = ({ authModel, userModel }) => {

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', createHomeRouter());
  if (authModel && userModel) {
    app.use("/auth", createAuthRouter({ authModel }));
    app.use("/user", createUserRouter({ userModel }));
  }

  app.listen(PORT, () => {
    console.log(`Server listening on PORT http://localhost:${PORT}`);
  });
};
