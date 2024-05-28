const express = require("express");
const { createUserRouter } = require("./routes/user.routes.js");
const { createAuthRouter } = require("./routes/auth.routes.js");
require("dotenv/config");
const { createHomeRouter } = require("./routes/home.routes.js");
const { createServiceRouter } = require("./routes/service.routes.js");
const { createCeremonyRouter } = require("./routes/ceremony.routes.js");

const createApp = ({ authModel, userModel, serviceModel, clientModel, ceremonyModel }) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  try {
    app.use("/auth", createAuthRouter({ authModel }));
    app.use("/user", createUserRouter({ userModel }));
    app.use("/services", createServiceRouter({ serviceModel, clientModel }));
    app.use("/ceremonies", createCeremonyRouter({ ceremonyModel }));

  } catch (error) {
    console.log({ error });  
  }

  app.use("/", createHomeRouter());

  return app;
};
module.exports = {
  createApp
}
