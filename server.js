const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration)

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json())

app.get('/api/v1/teams', (req, res) => {
  database('football_teams').select()
    .then( teams => {
      res.status(200).json(teams)
    })
    .catch( error => {
      res.status(500).json( { error })
    })
})

app.get('/api/v1/teams/:id', (req, res) => {
  database('football_teams')
    .where({ id: req.params.id})
    .then( teams => {
      res.status(200).json(teams)
    })
    .catch( error => {
      res.status(404).json({ error })
    })
})

app.post('/api/v1/teams', (req, res) => {
    const newTeam = req.body
    database('football_teams').insert(newTeam, 'id')
      .then(team => {
        res.status(201).json(team)
      })
      .catch( error => {
        res.status(422).json(error)
      })
})

app.get('/api/v1/quarterbacks', (req, res) => {
  database('football_quarterbacks').select()
    .then( players => {
      res.status(200).json(players)
    })
    .catch( error => {
      res.status(404).json(error)
    })
})

app.get('/api/v1/quarterbacks/:id', (req, res) => {
  database('football_quarterbacks').select()
    .where({ id: req.params.id})
    .then( player => {
      res.status(200).json(...player)
    })
    .catch( error => {
      res.status(404).json(error)
    })
})

app.delete('/api/v1/teams/:id', (req, res) => {
  database('football_teams').select()
    .where({id: req.params.id})
    .then( team => {
      res.status(204).json(team)
    })
    .catch( error => {
      res.status(422).json(error)
    })
})
app.listen(app.get('port'), () => {
  console.log(`app is running on port on ${app.get('port')}`)
})