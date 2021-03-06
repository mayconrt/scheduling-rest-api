exports.up = function(knex) {

    return knex.schema.createTable('places', function (table) {
        table.increments()
        table.string('name').notNullable();
        table.string('address').notNullable();

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('places')
  
};