import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
  res.json('rota inicial acessada')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
