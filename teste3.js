let data = require("./fakeData");

module.exports = function (req, res) {

    const { id } = req.params;

    const index = data.findIndex(d => d.id == id);

    if (index < 0) {
        return res.send('Usuário não encontrado');
    }

    data.splice(index, 1);

    return res.send("success");
};

