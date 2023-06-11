let data = require("./fakeData");

const getUser = (req, res) => {
    // Adicionei uma normalização, deixando tudo minúscula e sem caracteres especiais, 
    //desta forma a pesquisa não é case sensitive e não levará em consideração os caracteres especiais
    const name = req.header.username;

    /*
    A busca está para trazer um único usuário, mas poderíamos trazer uma lista
     de usuários cujo o nome contém a string que está sendo passada, com as linhas 
     de código abaixo:*/

    // const user = data.filter((d) => d.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(name));

    // if (!user.length) {
    //     res.status(404).send("Usuário não encontrado");
    // }

    const user = data.find((d) => d.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") == name);

    if (!user) {
        res.status(404).send("Usuário não encontrado");
    }

    user.counter = user.counter ? user.counter + 1 : 1;
    res.send(user);

};

const getUsers = (req, res) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};