const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== undefined) {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken

        try {
            const token = req.token;

            payload = jwt.verify(token, SECRET)
            next();
        } catch (error) {
            return res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    verifyToken
}