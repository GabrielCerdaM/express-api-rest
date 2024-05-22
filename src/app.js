import express from "express";
import { createUserRouter } from "./routes/user.routes.js";
import { createAuthRouter } from "./routes/auth.routes.js";
import "dotenv/config";
import { createHomeRouter } from "./routes/home.routes.js";
import { createServiceRouter } from "./routes/service.routes.js";
import { createCeremonyRouter } from "./routes/ceremony.routes.js";

const PORT = process.env.PORT ?? 3000;

export const createApp = ({ authModel, userModel, serviceModel, clientModel, ceremonyModel }) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  try {
    // app.use("/healthy", () => createhealthRouter());
    app.use("/auth", createAuthRouter({ authModel }));
    app.use("/user", createUserRouter({ userModel }));
    app.use("/services", createServiceRouter({ serviceModel, clientModel }));
    app.use("/ceremonies", createCeremonyRouter({ ceremonyModel }));

  } catch (error) {
    console.log({ error });
  }

  app.use("/", createHomeRouter());

  app.listen(PORT, () => {
    console.log(`Server listening on PORT http://localhost:${PORT}`);
  });
};
