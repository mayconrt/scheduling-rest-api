exports.up = function(knex) {

    return knex.schema.createTable('dayClosed', function (table) {
        table.increments()
        table.date('startDate').notNullable();
        table.date('endDate').notNullable();;
    
        table.integer('idPlaces').notNullable();

        table.foreign('idPlaces').references('id').inTable('places');

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('dayClosed')
  
};