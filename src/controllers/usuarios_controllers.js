const usuariosModels = require ("../models/usuarios_models");

module.exports = (app, bd)=> {

    app.get('/usuarios', (req, resp)=> 
     resp.send(bd.usuarios))

    app.post("/usuarios", (req, resp)=> {
        const novoUser = new usuariosModels(req.body.NOME, req.body.EMAIL, req.body.SENHA)
        bd.usuarios.push(novoUser) 
        resp.send(`usuario ${req.body.NOME} adicionado`)
    })
}
