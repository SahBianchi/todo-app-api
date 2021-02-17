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

    app.get("/usuarios/:id", async (req, resp)=>{
        try{
            const paramUsuario = await daoUsuarios.parametrosUsuario(req.params.id)
            resp.send(paramUsuario)
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
    })

    
}
