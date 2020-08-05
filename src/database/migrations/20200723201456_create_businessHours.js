exports.up = function(knex) {

    return knex.schema.createTable('businessHours', function (table) {
        table.increments()
        table.string('day').notNullable();
        table.string('openingTime').notNullable();
        table.string('closedTime').notNullable();

        table.integer('openingTimeCode').notNullable();
        table.integer('closedTimeCode').notNullable();        

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

    return knex.schema.dropTable('businessHours')
  
};