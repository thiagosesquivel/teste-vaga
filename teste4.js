var data = require("./fakeData");

module.exports = function (req, res) {

    const { id } = req.params;
    const { job, name } = req.body;

    const reg = data.find(d => d.id == id);

    reg.name = name ?? reg.name;
    reg.job = job ?? reg.job;
    reg.counter = reg.counter ?  reg.counter : 0;

    res.send(reg);

};