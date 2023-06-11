const data = require('./fakeData');

module.exports = function (req, res) {

    const name = req.header.username;

    const user = data?.find((d) => d.name?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == name);

    if (!user) {
        res.status(404).send("Usuário não encontrado");
    }

    res.send(`Usuário ${user?.name} foi lido ${user?.counter ?? 0} vezes.`);

};