const express = require('express');
const app = express()

app.set('port', process.env.PORT, 3000);

app.get('/', (req, res) => {
  res.send('oh hey')
})

app.listen(app.get('port'), () => {
  console.log(`app is running on port on ${app.get('port')}`)
})