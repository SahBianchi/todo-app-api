module.exports = class UsuariosDao{
    constructor(bd){
        this.bd = bd;
    }

    listaUsuarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all("SELECT * FROM USUARIOS", (erro, linhas)=>{
                if(erro){
                    reject(`Erro ao rodar a consulta ${erro}`)
                }else{
                    resolve(linhas)
                }

            })
        })
        
    }

    parametrosUsuario(usuariosParametros){
            return new Promise((resolve, reject)=>{
                this.bd.all("SELECT * FROM USUARIOS WHERE ID=?", usuariosParametros, (erro, linhas)=>{
                    if(erro){
                        reject(`Erro ao rodar a consulta ${erro}`)
                    }else{
                        resolve(linhas)
                    }
    
                })
            })
    }

    insereUsuario(usuario){
        return new Promise((resolve, reject)=>{
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", usuario, (erro, linhas)=>{
                if(erro){
                    reject(`Erro ao inserir o usuário ${erro}`)
                }else{
                    resolve(linhas)
                }
            })
        })
    }

    atualizaUsuario(parametro){
        return new Promise((resolve, reject)=>{
            let query = "UPDATE USUARIOS SET NOME=COALESCE(?,NOME), EMAIL=COALESCE(?,EMAIL), SENHA=COALESCE(?,SENHA) WHERE EMAIL=?"
            this.bd.run(query, parametro, (erro, linhas)=>{
                if(erro){
                    reject(`Erro ao atualizar o usuário ${erro}`)
                }else{
                    resolve(`Usuário ${parametro[3]} atulizado`)
                }
            })
        })
    }

    deletaUsuario(parametroDel){
        return new Promise((resolve, reject)=>{
            let queryDelete = "DELETE FROM USUARIOS WHERE ID=?"
            this.bd.run(queryDelete, parametroDel, (erro, linhas)=>{
                if(erro){
                    reject(`Erro ao deletar o usuário ${erro}`)
                }else{
                    resolve(`Usuário deletado`)
                }
            })
        })
    }
}