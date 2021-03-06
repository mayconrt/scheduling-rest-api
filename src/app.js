const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const allowCors = require('./cors')

const professional = require('./routes/professional')
const services = require('./routes/services')
const authenticate = require('./routes/auth')
const user = require('./routes/user')
const userxservices = require('./routes/userxservices')
const profissionalxservices = require('./routes/professionlsxservices')
const places = require('./routes/place')
const businessHours = require('./routes/businessHours')
const dayOff = require('./routes/dayoff')
const scale = require('./routes/scale')
const dayClosed = require('./routes/dayClosed')
const schedule = require('./routes/schedule')
const freeHours = require('./routes/freeHours')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(allowCors)

app.use('/authenticate', authenticate)
app.use('/user', user)
app.use('/professional', professional)
app.use('/services', services)
app.use('/userxservices', userxservices)
app.use('/profissionalxservices', profissionalxservices)
app.use('/places', places)
app.use('/businneshours', businessHours)
app.use('/dayoff', dayOff)
app.use('/scale', scale)
app.use('/dayclosed', dayClosed)
app.use('/schedule', schedule)
app.use('/freehours', freeHours)


// app.use((req, res, next) => {
//     //res.header('Acess-Control-Allow-Origin', '*') // Configurar para permitir apenas o servidor de prod
//     res.header("Access-Control-Allow-Origin", "https://salao-web.herokuapp.com");
//     //res.header('Acess-Control-Allow-Header','Origin, X-Requerested-with, Content-Type, Accept, Authorization')
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        

//     if (req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
//         return res.status(200).send({})
//     }

//     next()
               
// })

app.use((req, res, next) => {
    const erro = new Error('Not Found')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)

    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app