const tarefasModels = require ("../models/tarefas_models");
const tarefasDao = require ("../DAO/tarefas_dao");


module.exports = (app, bd)=> {

    const daoTarefas = new tarefasDao(bd);

    app.get ("/tarefas", async (req, resp)=>{
        try{
            const retornoListaTarefas = await daoTarefas.listaTarefas()
            resp.send(retornoListaTarefas)
        }

        catch(erro){
            resp.send(erro)
        }
    })

    app.get ("/tarefas/:id", async (req, resp)=>{
        try{
            const parametroTarefas = await daoTarefas.parametroTarefas(req.params.id)
            resp.send(parametroTarefas)
        }

        catch(erro){
            resp.send(erro)
        }
    })
        
    app.post("/tarefas", async (req, resp)=>{
        try{
            const insereTarefas = await daoTarefas.insereTarefa([req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario])
            resp.send(insereTarefas) 
        }
        catch(erro){
            resp.send(erro)
        }
    })
    
    app.delete("/tarefas/:ID", async (req, resp)=>{
        let parametroDel = [req.params.ID]
        try{
            const excluiTarefa = await daoTarefas.deletaTarefa(parametroDel)
            resp.send(excluiTarefa)
        }
        catch(erro){
            resp.send(erro)
        } 
    })

    app.put("/tarefas/:id", async (req, resp)=>{
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario, req.params.id]
        try{
            const alteraTarefa = await daoTarefas.atualizaTarefa(parametro)
            resp.send(alteraTarefa)
        }
        catch(erro){
            resp.send(erro)
        }
    })

}