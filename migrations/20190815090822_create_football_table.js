
exports.up = function(knex) {
  return knex.schema.createTable('football', table => {
    table.increments('id');
    table.varchar('name');
    table.varchar('location');
    table.integer('established')
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExits('football')
}; 
