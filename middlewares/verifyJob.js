module.exports = function (req, res, next) {
    const jobsAllowDeleteAndCreator = ['desenvolvedor', 'administrador'];
    const headerAuth = req.headers.authorization;

    if (!headerAuth) {
        return res.status(401).send('Usuário não autenticado');
    }

    const [_, job] = atob(headerAuth).split(":");

    if (!jobsAllowDeleteAndCreator.includes(job.toLocaleLowerCase())) {
        return res.status(403).send('Usuário não pode realizar essa operação');
    }

    next();


}