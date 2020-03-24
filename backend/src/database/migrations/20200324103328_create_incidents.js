
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments(); // Valores auto-incrementaveis

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();// relacionamento com a ONG

    table.foreign('ong_id').references('id').inTable('ongs');
   
  })
  
};

exports.down = function(knex) {
  return knew.schema.dropTable('incidents');
  
};
