import { Router } from "express";
import { ServiceController } from "../controller/service.controller.js";

export const createServiceRouter = ({ serviceModel, clientModel }) => {
    const router = Router();

    const serviceCtrl = new ServiceController({ serviceModel, clientModel });

    router.get("/", serviceCtrl.getAll);

    router.post("/", serviceCtrl.create);

    // router.put('/:serviceId', serviceCtrl.edit);


    return router;
}
