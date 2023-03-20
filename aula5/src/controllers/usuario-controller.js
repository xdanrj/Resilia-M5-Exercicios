const controllerUsuarios = (app) => {
    app.get('/usuarios', (req, res) => {
        res.send("Você está em usuários!")
    })

    app.post('/usuarios', (req, res) => {
        res.send("Rota POST de usuário ativada: usuário adicionado ao banco de dados")
    })
}

export default controllerUsuarios