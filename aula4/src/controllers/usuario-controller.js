const controllerUsuarios = (app) => {
    app.get('/usuarios', (req, res) => {
        res.send("Rota ativada com GET USUARIOS")
    })
}

export default controllerUsuarios