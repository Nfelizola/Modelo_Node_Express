const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('olá mundo veio sem porteira!')
})

app.listen(port, () => {
  console.log(`o Aplicativo de Exemplo está aguardando na porta: ${port}`)
})
