
exports.up = function(knex) {// Método de criação da tabela
 return knex.schema.createTable('ongs', function(table){
    table.string('id').primary(); //chave primaria
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); // Segundo paramêtros será o valor do tamanho no banco de dados.
});
};

exports.down = function(knex) { // Método responsável por desfazer a tela
   return knex.schema.dropTable('ongs');

  
};
