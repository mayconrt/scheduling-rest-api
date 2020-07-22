exports.up = function(knex) {

    return knex.schema.createTable('schedules', function (table) {
        table.increments()
        table.string('name').notNullable();
        table.string('open').notNullable();
        table.string('closed').notNullable();

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('schedules')
  
};