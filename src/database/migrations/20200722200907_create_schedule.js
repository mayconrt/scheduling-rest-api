exports.up = function(knex) {

    return knex.schema.createTable('schedules', function (table) {
        table.increments()
        table.integer('idUsers').notNullable();
        table.integer('idServices').notNullable();
        table.integer('idProfessionals').notNullable();

        table.integer('startTimeCode').notNullable();
        table.integer('endTimeCode').notNullable();        

        table.foreign('idUsers').references('id').inTable('users');
        table.foreign('idServices').references('id').inTable('services');
        table.foreign('idProfessionals').references('id').inTable('professionals');

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