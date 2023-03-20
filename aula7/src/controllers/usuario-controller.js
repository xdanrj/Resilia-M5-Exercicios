import UsuarioModel from "../models/usuarioModel.js"
import bd from "../infra/bd.js"

const controllerUsuarios = (app) => {
    app.get('/usuarios', (req, res) => {
        res.send(bd.usuarios)
        console.log(bd.usuarios)
    })

    app.post('/usuarios', (req, res) => {
        const resposta = UsuarioModel.armazenar(req.body)
        res.send(resposta)
        
    })
}



export default controllerUsuarios