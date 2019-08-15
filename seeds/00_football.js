import footballTeams from '../footballTeams'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('football').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        footballTeams.map( team => {
          return {team: }
        })
      ]);
    });
};
