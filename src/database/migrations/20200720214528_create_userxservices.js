exports.up = function(knex) {

    return knex.schema.createTable('userxservices', function (table) {
        table.increments()

        table.integer('idUser').notNullable();
        table.integer('idServices').notNullable();

        table.foreign('idUser').references('id').inTable('user');
        table.foreign('idServices').references('id').inTable('services');

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('userxservices')
  
};