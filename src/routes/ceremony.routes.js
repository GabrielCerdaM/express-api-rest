const { Router } = require('express');
const { CeremonyController } = require('../controller/ceremony.controller.js');

const createCeremonyRouter = ({ ceremonyModel }) => {
    const router = Router();

    const ceremonyCtrl = new CeremonyController({ ceremonyModel })

    router.get('/', ceremonyCtrl.getAll)

    router.post('/', ceremonyCtrl.create)

    router.delete('/:ceremonyId', ceremonyCtrl.delete)

    return router
}

module.exports = {
    createCeremonyRouter
}