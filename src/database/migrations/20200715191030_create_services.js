exports.up = function(knex) {

    return knex.schema.createTable('services', function (table) {
        table.increments()
        table.string('name').notNullable();
        table.integer('duration').notNullable();
        table.double('value').notNullable();
        table.string('description').notNullable();

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('services')
  
};