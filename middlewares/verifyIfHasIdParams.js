module.exports = function verifyIsHasIdParams(req, res, next) {
    const { id } = req.params;

    if (!id) {
        res.status(400).send("É necessário informar um id");
    }
    
    next();
}