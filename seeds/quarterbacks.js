const quarterBacks = require('../footballQuarterbacks')
console.log(quarterBacks)
exports.seed = function(knex) {
  return knex('football_quarterbacks').del()
    .then(function () {
      return knex('football_quarterbacks').insert([
        ...quarterBacks
      ]);
    });
};
