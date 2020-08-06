
const connection = require('../database/conection')

module.exports = {

    async index(request, response) {

        try {

            const { idPlaces, idServices, day, startTimeCode, endTimeCode, date } = request.body

            const professional = await connection('professionalxservices')
            .join('professionals', 'professionals.id', 'professionalxservices.idProfessional')
            .join('scales', 'scales.idProfessionals', 'professionalxservices.idProfessional')
            .where({ 
                'professionals.idPlaces': idPlaces,
                'professionalxservices.idServices': idServices,
                'scales.day': day
             })
            //  .andWhere(function(){
            //      this.where('scales.startTimeCode', '>=', startTimeCode)             
            //  })

            //  .andWhere(function(){
            //     this.where('scales.endTimeCode', '>=', endTimeCode)               
            // })             

            // .whereNotExists(function() {
            //     this.select('*').from('schedules')
            //     .whereRaw('schedules.idProfessionals = professionals.id')
            //     .andWhere(function(){
            //         this.where('schedules.endTimeCode', '<=', endTimeCode)               
            //     })
            //     .andWhere(function(){
            //         this.where('schedules.endTimeCode', '>=', endTimeCode)               
            //     })
            //     .andWhere(function(){
            //         this.where('schedules.date', '=', date)               
            //     })                
                
            //   })

            .select('professionals.id', 'professionals.name')

            return response.status(200).json(professional)
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    }

}