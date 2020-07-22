
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
    }


    // async update(request, response) {
    //     try {
    //         const { id_user } = request.params
    //         const { user, email, name, change_password } = request.body

    //         const login = await connection('login')
    //             .where('id_user', id_user)
    //             .update({
    //                 user,
    //                 email,
    //                 name,
    //                 change_password
    //             })

    //         if (login) {
    //             return response.status(200).json({
    //                 id: id_user,
    //                 msg: 'Usuário atualizado com suceso.'
    //             })
    //         } else {
    //             return response.status(404).json({error: 'Usuário não encontrado'})
    //         }
    //     } catch (error) {
    //         return response.status(400).json({ error: Error.handleMessage(error) })
    //     }

    // }

    // async changePassword(request, response) {

    //     try {

    //         const { user } = request.params
    //         const newPassword = Password.generate()

    //         var message

    //         const id = await connection('login')
    //             .where('user', user)
    //             .update({
    //                 password: newPassword
    //             })

    //         if (id) {

    //             const [login] = await connection('login')
    //                 .where('id_user', id)
    //                 .select('*')

    //             if (login) {

    //                 if (login.email){
    //                     Email.changePassword(login.email, newPassword, login.name, 'S')
    //                     message = 'As instruções de redefinições para redefinição de senha foram enviadas para seu e-mail.'
    //                 }else{
    //                     Email.changePassword(login.email, newPassword, login.name, 'N')
    //                     message = 'Redefinição de senha solicitada, contate o administrador.'
    //                 }

    //             }
    //             return response.status(200).json({
    //                 id: id,
    //                 msg: message
    //             })

    //         } else {
    //             return response.status(404).json({error: 'Usuário não encontrado.'})
    //         }

    //     } catch (error) {
    //         // return response.status(400).json({ error: Error.handleMessage(error) })
    //         return response.status(400).json(error)
    //         console.log("Erro nao sei oq", error)
    //     }

    // },

}