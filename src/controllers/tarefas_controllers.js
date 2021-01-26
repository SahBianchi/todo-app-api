const tarefasModels = require ("../models/tarefas_models");

module.exports = (app, bd) => {

    app.get ("/tarefas", (req, resp)=>
        resp.send(bd.tarefas))

    app.post ("/tarefas", (req, resp)=>{
        const novaTarefa = new tarefasModels (req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao)
        bd.tarefas.push(novaTarefa)
        resp.send(`Tarefa ${req.body.titulo} adicionada`)
    }
    )

}