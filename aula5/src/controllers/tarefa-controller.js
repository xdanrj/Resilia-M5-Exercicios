const controllerTarefas = (app) => {
    app.get('/tarefas', (req, res) => {
        res.send("Você está em tarefas!")
    })
    app.post('/tarefas', (req, res) => {
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    })
}

export default controllerTarefas