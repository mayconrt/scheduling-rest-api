
const connection = require('../database/conection')

module.exports = {

    async index(request, response){

        const businessHours = await connection('businessHours')
        .select('*')

        response.json(businessHours)
    },
    
    async create(request, response) {
        try {
            const { day, openingTime, closedTime, idPlaces } = request.body

            const businessHours = await connection('businessHours').insert({
                day,
                openingTime,
                closedTime,
                idPlaces
            })

            if (businessHours) {
                return response.status(201).json({
                    message: 'Business Hours incluído com sucesso.'
                })
            } else {
                return response.status(400).json({ error: error })
            }

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    },

    async delete(request, response) {
        try {
            const { id } = request.params

            const businessHours = await connection('businessHours')
                .where({ 'id': id })
                .delete()

            if (businessHours) {
                return response.status(201).json({
                    message: 'Business Hours excluído com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Nenhum registro encontrado' })
            }

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    },

    async update(request, response) {

        try {
            const { id } = request.params
            const { day, openingTime, closedTime, idPlaces } = request.body

            const businessHours = await connection('businessHours').where('id', id)
                .update({
                    day,
                    openingTime,
                    closedTime,
                    idPlaces
                })

            if (businessHours) {
                return response.status(201).json({
                    message: 'Business Hours atualizado com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Nenhum registro encontrado' })
            }
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }    

}