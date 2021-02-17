module.exports = class TarefasDao{
    constructor(bd){
        this.bd = bd;
    }

    listaTarefas(){
        return new Promise((resolve, reject)=>{
            this.bd.all("SELECT * FROM TAREFAS", (erro, linhas)=> {
                if(erro){
                    reject(`Erro ao rodar a consulta ${erro}`)
                }else{
                    resolve(linhas)
                }
            })
        })
    }

    parametroTarefas(paramTarefas){
        return new Promise((resolve, reject)=>{
            this.bd.all("SELECT * FROM TAREFAS WHERE ID=?", paramTarefas, (erro, linhas)=> {
                if(erro){
                    reject(`Erro ao rodar a consulta ${erro}`)
                }else{
                    resolve(linhas)
                }
            })
        })

    }

    insereTarefa(tarefa){
        let query = "INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)"
        return new Promise((resolve, reject)=>{
            this.bd.run(query, tarefa, (erro)=>{
                if(erro){
                    reject(`Erro ao inserir a tarefa ${erro}`)
                }else{
                    resolve(`Tarefa adicionada`)
                }
            })
        })
    }

    deletaTarefa(parametroDel){
        return new Promise((resolve, reject)=>{
            let queryDelete = "DELETE FROM TAREFAS WHERE ID=?"
            this.bd.run(queryDelete, parametroDel, (erro)=>{
                if(erro){
                    reject(`Erro ao deletar a tarefa ${erro}`)
                }else{
                    resolve(`Tarefa deletada`)
                }
            })
        })
    }

    atualizaTarefa(parametro){
        return new Promise((resolve, reject)=>{
            let query = "UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE ID = ?"
            this.bd.run(query, parametro, (erro)=>{
                if(erro){
                    reject(`Erro ao atualizar a tarefa ${erro}`)
                }else{
                    resolve(`Tarefa atulizada`)
                }
            })
        })
    }

}