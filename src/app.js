const express = require("express");
const { createUserRouter } = require("./routes/user.routes.js");
const { createAuthRouter } = require("./routes/auth.routes.js");
require("dotenv/config");
const { createHomeRouter } = require("./routes/home.routes.js");
const { createServiceRouter } = require("./routes/service.routes.js");
const { createCeremonyRouter } = require("./routes/ceremony.routes.js");
const { SECRET } = process.env
const jwt = require('jsonwebtoken');
const { verifyToken } = require("./middlewares/verifyToken.js");

const createApp = ({ authModel, userModel, serviceModel, clientModel, ceremonyModel }) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  try {

    app.post('/token', (req, res) => {
      const { id: sub, name } = { name: "gabriel", name: 'gabriel' }
      const token = jwt.sign({
        sub,
        name,
        exp: Date.now() + 60 * 1000
      },
        SECRET, {expiresIn: 60});
      res.send({ token })
    })

    app.get('/public', (req, res) => {
      try {
        res.send('im public')
      } catch (error) {
        res.status(401).send({ error: error.message })
      }
    })

    app.get('/private', verifyToken, (req, res) => {
      try {
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ2FicmllbCIsImV4cCI6MTcxNzAyMjkzMjA4NCwiaWF0IjoxNzE3MDIyODcyfQ.iSZzD5wfe1mrARxwFFCQYlAgnOca6JRZ7X2zt_FRvvE
        // const token = req.headers.authorization.split(' ')[1]
        const token = req.token;

        payload = jwt.verify(token, SECRET)
        // res.send('im private')
        console.log({payload, date: Date.now()});
        if (Date.now() > payload.exp) {
          return res.status(401).send({ error: "token expired" })
        }
        res.send({ payload })
      } catch (error) {
        res.status(401).send({ error: error.message })
      }
    })


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
