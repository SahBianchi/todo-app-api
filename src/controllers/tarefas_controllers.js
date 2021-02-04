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
        

    app.post ("/tarefas", (req, resp)=>{
        const novaTarefa = new tarefasModels (req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao)
        bd.tarefas.push(novaTarefa)
        resp.send(`Tarefa ${req.body.titulo} adicionada`)
    }
    )
    //Criar um pote vazio, criar um for para ler cada item do bd, criar um if para diferenciar o que eu estou procurando e colocar o que for diferente dentro do pote vazio que foi criado, dizer que o bd recebe o novo pote

    // app.delete("/tarefas/:titulo", (req, resp)=>{
    //     const naoDeletar = []
    //     for(let tarefa of bd.tarefas){
    //         if(tarefa.titulo !== req.params.titulo){
    //             naoDeletar.push(tarefa)
    //             resp.send(`Tarefa ${req.params.titulo} não encontrada`)
    //         }
    //     }
    //     bd.tarefas = naoDeletar
    //     console.log(naoDeletar)
        
    //     resp.send(`Tarefa ${req.params.titulo} deletada`)
    // })

    app.delete("/tarefas/:titulo", (req, resp)=> {
        for (let i = 0; i < bd.tarefas.length; i++){
            if (req.params.titulo == bd.tarefas[i].titulo){
                bd.tarefas.splice(i, 1)
                console.log(req.params.titulo)
                resp.send("tarefa retirado")
            }
        }
        resp.send("não achei")
    })

    
    app.put("/tarefas/:titulo", (req, resp)=>{
        for(let tarefa of bd.tarefas){
            if(tarefa.titulo === req.params.titulo){
                tarefa.titulo = req.body.titulo
                tarefa.descricao = req.body.descricao
                tarefa.status = req.body.status
                tarefa.dataDeCriacao = req.body.dataDeCriacao
                resp.send(`Tarefa ${req.params.titulo} alterada`)
            }
        }
        resp.send(`Tarefa ${req.params.titulo} não encontrada`)
    })

}