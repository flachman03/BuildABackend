
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('football_teams', table => {
      table.increments('id');
      table.varchar('name');
      table.varchar('location');
      table.integer('established')
    }),

    knex.schema.createTable('football_quarterbacks', table => {
      table.increments('id');
      table.varchar('team');
      table.varchar('name');
      table.integer('number')
    })
  ])
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits('football_teams')
};
