const footballTeams = require('../footballTeams')
const myFootballTeams = Object.entries(footballTeams).map( team => {
  return {name: team[1].name, location: team[1].origin, established: team[1].established}
})
console.log(myFootballTeams)
exports.seed = function(knex) {
  return knex('football_teams').del()
    .then(function () {
      return knex('football_teams').insert([
        ...myFootballTeams
      ]);
    });
};
