const usuariosModels = require ("../models/usuarios_models");
const usuariosDao = require ("../DAO/usuarios_dao");

module.exports = (app, bd)=> {

    const daoUsuarios = new usuariosDao(bd);

    // Get
    app.get("/usuarios", async (req, resp)=>{
        try{
            const retornoListaDeUsuarios = await daoUsuarios.listaUsuarios()
            resp.send(retornoListaDeUsuarios)
        }
        catch(erro){
            resp.send(erro)
        }
    })
     
    app.post("/usuarios", async (req, resp)=>{
        try{
            const insereUsuario = await daoUsuarios.insereUsuario([req.body.nome, req.body.email, req.body.senha])
            resp.send(insereUsuario) 
        }
        catch(erro){
            resp.send(erro)
        }
        // const novoUser = new usuariosModels(req.body.NOME, req.body.EMAIL, req.body.SENHA)
        // bd.usuarios.push(novoUser) 
        // resp.send(`usuario ${req.body.NOME} adicionado`)
    })

    app.put("/usuarios/:EMAIL", async (req, resp)=>{
        let parametro = [req.body.NOME, req.body.EMAIL, req.body.SENHA, req.params.EMAIL]
        try{
            const alteraUsuario = await daoUsuarios.atualizaUsuario(parametro)
            resp.send(alteraUsuario)
        }
        catch(erro){
            resp.send(erro)
        }
        
        // for(let usuario of bd.usuarios){
        //     if(usuario.email === req.params.email){
        //         usuario.nome = req.body.nome
        //         usuario.email = req.body.email
        //         usuario.senha = req.body.senha
        //         resp.send(`Usuario ${req.params.email} alterado`)
        //     }
        // resp.send(`Usuario ${req.params.email} não encontrado`)
    })
        
    

    app.delete("/usuarios/:ID", async (req, resp)=>{
        let parametroDel = [req.params.ID]
        try{
            const excluiUsuario = await daoUsuarios.deletaUsuario(parametroDel)
            resp.send(excluiUsuario)
        }
        catch(erro){
            resp.send(erro)
        } 
    
        // for (let i = 0; i < bd.usuarios.length; i++){
        //     if (req.params.email == bd.usuarios[i].email){
        //         bd.usuarios.splice(i, 1)
        //         console.log(req.params.email)
        //         resp.send("usuario retirado")
        //     }
        // }
        // resp.send("não achei")
    })

    
}
