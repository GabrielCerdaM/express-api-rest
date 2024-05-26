const { Router } = require('express');


const createHomeRouter = () => {
    const router = new Router();

    router.get('/', (req, res) => {
        res.status(200).json(true)
    })

    return router
}

module.exports = {
    createHomeRouter
}