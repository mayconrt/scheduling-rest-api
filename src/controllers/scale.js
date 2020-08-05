
const connection = require('../database/conection')

module.exports = {

    async index(request, response) {

        try {
            const scales = await connection('scales').select('*')
            return response.status(200).json(scales)
        } catch (error) {
            return response.status(500).json({
                error: error.message
            })
        }
    },

    async create(request, response) {
        try {
            const { day, 
                    dayDescription, 
                    startTime, 
                    endTime,
                    startTimeCode, 
                    endTimeCode,
                    idProfessionals } = request.body

            const scales = await connection('scales').insert({
                day, 
                dayDescription, 
                startTime, 
                endTime,
                startTimeCode, 
                endTimeCode,
                idProfessionals
            })

            if (scales) {
                return response.status(201).json({
                    message: 'Unidade incluída com sucesso.'
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

            const scales = await connection('scales')
                .where({ 'id': id })
                .delete()

            if (scales) {
                return response.status(201).json({
                    message: 'Unidade excluída com sucesso.'
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
            const { name, address } = request.body

            const places = await connection('services').where('id', id)
                .update({
                    name,
                    address
                })

            if (places) {
                return response.status(201).json({
                    message: 'Unidade atualizada com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Nenhum registro encontrado' })
            }
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }

}