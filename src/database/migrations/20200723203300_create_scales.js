exports.up = function(knex) {

    return knex.schema.createTable('scales', function (table) {
        table.increments()
        table.string('day').notNullable();
        table.string('dayDescription').notNullable();
        table.string('startTime').notNullable();
        table.string('endTime').notNullable();

        table.integer('startTimeCode').notNullable();
        table.integer('endTimeCode').notNullable();        

        table.integer('idProfessionals').notNullable();

        table.foreign('idProfessionals').references('id').inTable('professionals');
           

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