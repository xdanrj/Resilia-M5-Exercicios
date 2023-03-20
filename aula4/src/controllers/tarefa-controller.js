const controllerTarefas = (app) => {
    app.get('/tarefas', (req, res) => {
        res.send("Rota ativada com GET TAREFAS")
    })
}

export default controllerTarefas