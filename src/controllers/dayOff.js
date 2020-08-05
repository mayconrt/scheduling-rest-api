
const connection = require('../database/conection')

module.exports = {

    async index(request, response){

        const dayOff = await connection('dayOff')
        .select('*')

        response.json(dayOff)
    }, 
    
    async create(request, response) {
        try {
            const { startDate, endDate, idProfessionals } = request.body

            const dayOff = await connection('dayOff').insert({
                startDate, 
                endDate, 
                idProfessionals
            })

            if (dayOff) {
                return response.status(201).json({
                    message: 'Profissional incluído com sucesso.'
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

            const dayOff = await connection('dayOff')
                .where({ 'id': id })
                .delete()

            if (dayOff) {
                return response.status(201).json({
                    message: 'Professional excluído com sucesso.'
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
            const { name, urlImage, idPlaces } = request.body

            const service = await connection('professionals').where('id', id)
                .update({
                    name,
                    urlImage,
                    idPlaces
                })

            if (service) {
                return response.status(201).json({
                    message: 'Profissional atualizado com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Nenhum registro encontrado' })
            }
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }    

}