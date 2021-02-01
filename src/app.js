const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

const usuariosControllers = require ("./controllers/usuarios_controllers");
const tarefasControllers = require ("./controllers/tarefas_controllers");

/* Criamos uma const com a classe de usuarios e tarefas modelo
const usuariosModels = require ("./models/usuarios_models");
const tarefasModels = require ("./models/tarefas_models");*/

const bd = require ("./infra/bd");



usuariosControllers(app,bd)
tarefasControllers(app,bd)


// console.log(new usuariosModels("Tangerina", "tang@tang.com", "miaumiau"))
// console.log(new tarefasModels("petshop", "comprar ração", "a fazer", "26/01/21"))


app.listen(port, ()=> console.log (`[INFO] Servidor rodando na porta ${port}`))



