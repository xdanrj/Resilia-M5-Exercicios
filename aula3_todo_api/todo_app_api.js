import express from 'express';
const app = express()

app.get('/', function (req, res) {
  res.send('raiz')
})

app.get('/usuario', function (req, res) {
  res.send('Fulano')
})
app.get('/tarefa', function (req, res) {
  res.send('limpar casa')
})



app.listen(3000)
