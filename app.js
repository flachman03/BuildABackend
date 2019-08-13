const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/books', (req, res) => {
  res.send('Hello Books')
})

app.listen(PORT, () => {
  console.log('server app.js running')
})