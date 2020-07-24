exports.up = function(knex) {

    return knex.schema.createTable('scales', function (table) {
        table.increments()
        table.string('name').notNullable();

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('scales')
  
};