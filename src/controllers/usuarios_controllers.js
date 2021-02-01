const usuariosModels = require ("../models/usuarios_models");

module.exports = (app, bd)=> {

    app.get('/usuarios', (req, resp)=> 
     resp.send(bd.usuarios))
     
    app.post("/usuarios", (req, resp)=> {
        const novoUser = new usuariosModels(req.body.NOME, req.body.EMAIL, req.body.SENHA)
        bd.usuarios.push(novoUser) 
        resp.send(`usuario ${req.body.NOME} adicionado`)
    })

    app.delete("/usuarios/:email", (req, resp)=> {
        for (let i = 0; i < bd.usuarios.length; i++){
            if (req.params.email == bd.usuarios[i].email){
                bd.usuarios.splice(i, 1)
                console.log(req.params.email)
                resp.send("usuario retirado")
            }
        }
        resp.send("não achei")
    })

    app.put("/usuarios/:email", (req, resp)=>{
        for(let usuario of bd.usuarios){
            if(usuario.email === req.params.email){
                usuario.nome = req.body.nome
                usuario.email = req.body.email
                usuario.senha = req.body.senha
                resp.send(`Usuario ${req.params.email} alterado`)
            }
        }
        resp.send(`Usuario ${req.params.email} não encontrado`)
    })
}
