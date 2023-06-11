var data = require("./fakeData");

module.exports = function (req, res) {

    const { name, job } = req.body;

    const id = data.length + 1;

    let newUser = {
        id,
        name,
        job
    }

    data.push(newUser)

    res.send(newUser);

};