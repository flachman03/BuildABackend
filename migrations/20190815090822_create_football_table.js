
exports.up = function(knex) {
  return knex.schema.createTable('football', table => {
    table.increments('id');
    table.varchar('team');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits('football')
};
