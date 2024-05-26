const { Router } = require("express");
const { ServiceController } = require("../controller/service.controller.js");

const createServiceRouter = ({ serviceModel, clientModel }) => {
    const router = Router();

    const serviceCtrl = new ServiceController({ serviceModel, clientModel });

    router.get("/", serviceCtrl.getAll);

    router.post("/", serviceCtrl.create);

    // router.put('/:serviceId', serviceCtrl.edit);

    return router;
}

module.exports = {
    createServiceRouter
}