const { Router } = require("express");
const { AuthController } = require('../controller/auth.controller.js');

const createAuthRouter = ({ authModel }) => {
    const router = Router();

    const authCtrl = new AuthController({ authModel });

    router.post("/register", authCtrl.register);

    router.post("/login", authCtrl.login);

    router.get("/logout", authCtrl.logout);


    return router;
}


module.exports = {
    createAuthRouter
}