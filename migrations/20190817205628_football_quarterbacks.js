
exports.up = function(knex) {
  return knex.schema.createTable('football_quarterbacks', table => {
    table.increments('id');
    table.varchar('name');
    table.varchar('team');
    table.integer('number');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits('football_quarterbacks')
};
