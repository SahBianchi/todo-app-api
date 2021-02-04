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
}