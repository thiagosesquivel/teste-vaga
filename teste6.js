let data = require('./fakeData');

module.exports = function (req, res){
    const {name} = req.body;
    const user = data.find((d)=>d.name===name);
    res.send(btoa(`${user.name}:${user.job}`));
}