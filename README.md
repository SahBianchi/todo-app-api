# TODO-APP-API - Projeto Mod.3 - Resilia

A TODO-APP-API é um projeto que foi desenvolvido durante o modulo 3 do bootcamp de Desenvolvimento Web Full-Stack da Resilia Educação, a proposta foi de criar uma API para o gerenciamento de tarefas baseada na metodologia Kanban.

Nesse projeto foi utilizado:
    - JavaScript
    - NodeJS
	- Express
	- Sqlite 3
	- CORS
	- Body – Parser
	- Nodemon
	- Insominia

O Github foi utilizado para o controle das versões e você pode acompanhar tudo em Todo-app-api.


## Instruções
Caso você queira rodar esse projeto na sua máquina basta seguir essas instruções:

    - Instale NodeJS em seu computador.
    - Baixe os arquivos deste repositório ou clone o repositório utilizando o seguinte comando no seu terminal: git clone https://github.com/SahBianchi/todo-app-api.git
    - Entre na pasta do repositório baixado ou clonado anteriormente e instale pelo próprio terminal as dependências que serão necessárias para você utilizar a API, para isso digite no terminal o seguinte comado “npm install”. 
    - Ainda no seu terminal utilize o seguinte comando “npm start” para inicializar a aplicação.


## Rotas de Acesso
Esse projeto é uma API REST, sendo assim foi utilizado os verbos HTTP GET, POST, DELETE e PUT.

➡ Usuários 
GET - Para ver todos os usuários que estão no bando de dados: http://localhost:3000/usuarios 
GET - Para ver apenas um usuário do bando de dados, utilize o seu id: http://localhost:3000/usuarios/id
POST - Para inserir usuários no banco de dados: http://localhost:3000/usuarios

Para adicionar um usuário na rota, digite no corpo as informações seguindo o exemplo abaixo:

{
   “nome”: “exemplo”,
   “email”: “exemplo@gmail.com”,
   “senha”: “123456”
}


PUT – Para alterar os dados na tabela “usuarios” do banco de dados: http://localhost:3000/usuarios/id
DELETE – Para apagar um registro na tabela de “usarios” no bando de dados: 
http://localhost:3000/usuarios/id

➡ Tarefas 
GET - Para ver todas as tarefas que estão no bando de dados: http://localhost:3000/tarefas 
GET - Para ver apenas uma tarefa do bando de dados, utilize o seu id: http://localhost:3000/tarefas/id
POST - Para inserir uma tarefa no banco de dados: http://localhost:3000/tarefas

Para adicionar uma tarefa na rota, digite no corpo as informações seguindo o exemplo abaixo:

{
   “titulo”: “exemplo”,
   “descricao”: “exemplo”,
   “status”: “em andamento”,
   “dataCriacao”: “22/02/2020”,
   “idUsuario”: “numero_do_id_do_usuario_dono_da_tarefa”
}


PUT – Para alterar os dados na tabela “tarefas” do banco de dados: http://localhost:3000/tarefas/id
DELETE – Para apagar um registro na tabela de “tarefas” no bando de dados: 
http://localhost:3000/tarefas/id

