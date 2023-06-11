module.exports = function verifyIsHasNameParams(req, res, next) {
    const { name } = req.query;

    if (!name) {
        res.status(400).send("É necessário informar um usuário");
    }
    req.header.username = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    next();
}