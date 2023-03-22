//import UsuarioModel from "../models/usuarioModel.js"
import bd from "../infra/bd.js"
import UsuarioDAO from "../dao/usuarioDAO.js";

const controllerUsuarios = (app) => {
    app.get('/usuarios', (req, res) => {
        res.send(bd.usuarios)
        console.log(bd.usuarios)
    });

    app.post('/usuarios', (req, res) => {
        const resposta = UsuarioDAO.armazenar(req.body)
        res.send(resposta)
    });

    app.get('/usuarios/email/:email', (req, res) => {
        const resposta = UsuarioDAO.mostrarUm(req.params.email)
        res.send(resposta.dados);
    });

    app.delete('/usuarios/id/:id', (req, res)=> {
        UsuarioDAO.deletarUm(req.params.id)
        res.send(`Usuário ${req.params.id} deletado!`);
    });

    app.put('/usuarios/email/:email', (req, res)=> {
        UsuarioDAO.atualizar(req.params.email, req.body)
        res.send(`Registro de ${req.params.email} atualizado!`);
    });  
}

export default controllerUsuarios