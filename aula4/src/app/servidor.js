import express  from "express";
import controllerUsuarios from "../controllers/usuario-controller.js";
import controllerTarefas from "../controllers/tarefa-controller.js";

const app = express();

controllerUsuarios(app)
controllerTarefas(app)

app.listen(3000)
