const controllerTarefas = (app) => {
    app.get('/tarefas', function (req, res) {
        res.send("suas tarefas aqui")
    }),
        app.post('/tarefas', function (req, res) {
            res.send("Rota POST de usuario ativada: tarefa adicionada ao banco de dados")
        })

}



export default controllerTarefas

