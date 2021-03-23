const express = require("express") 
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Sequelize = require ("sequelize")


// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json)
    // Conexão com banco de dados MySQL
        const sequelize = new Sequelize('testedebd', 'root', '1234', {
            host: "localhost",
            dialect: 'mysql'
        })
        sequelize.authenticate().then(function(){
            console.log("Conectado com sucesso! ")
        }).catch(function(erro){
            console.log("Falha ao se conectar: " + erro)
        })
// Rotas
        app.get('/cad', function(req, res){
            res.render('formulario')
        })

        app.post('/recebido', function(req, res){
            //req.body.conteudo
            res.send(`Texto: ${req.body.titulo} Conteúdo: ${req.body.conteudo}`)
        })



/* É preciso deixar esse bloco no final*/
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")

})