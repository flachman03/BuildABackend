const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration)

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  database('football_teams').select()
    .then( teams => {
      res.status(200).json(teams)
    })
    .catch( error => {
      res.status(500).json( { error })
    })
})

app.listen(app.get('port'), () => {
  console.log(`app is running on port on ${app.get('port')}`)
})