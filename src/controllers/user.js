
const connection = require('../database/conection')
const Password = require('../util/password')

module.exports = {

    async index(request, response) {

        try {
            const services = await connection('user').select('*')
            return response.status(200).json(services)
        } catch(error) {
            return response.status(500).json({
                error: error
            })
        }
    },

    async create(request, response) {
        try {
            let { login, password } = request.body

            if (!Password.validate(password))
                return response.status(400).json({ error: 'Padrão invalido.' })

            password = Password.criptografar(password)

            const user = await connection('user')
            .returning('id')
            .insert({
                login,
                password

            })
            
            if (user.length > 0) {
                return response.status(200).json({
                    id: user[0],
                    message: 'Usuário incluído com sucesso'
                })
            } else {
                return response.status(400).json({ error: 'Erro ao criar o usuario.' })
            }

        } catch (error) {
            return response.status(400).json({ error: error, message:error.message })
        }

    },

   async delete(request, response) {
        try {
            const { id } = request.params
            const user = await connection('user').where('id', id).delete()

            if (user > 0) {
                return response.status(200).json({
                    msg: 'Usuário excluído com sucesso.'
                })
            } else {
                return response.status(404).json({ error: 'Usuário não encontrado.' })
            }
        } catch (error) {
            return response.status(400).json({ error: error })
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