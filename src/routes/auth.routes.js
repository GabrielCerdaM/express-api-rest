import { Router } from "express";
import { AuthController } from '../controller/auth.controller.js';

export const createAuthRouter = ({ authModel }) => {
    const router = Router();

    const authCtrl = new AuthController({ authModel });
    router.post("/register", authCtrl.register);

    router.post("/login", authCtrl.login);

    router.get("/logout", authCtrl.logout);


    return router;
}
