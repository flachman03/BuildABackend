
exports.seed = function(knex) {
  return knex('football_quarterbacks').del()
    .then(function () {
      return knex('football_quarterbacks').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
