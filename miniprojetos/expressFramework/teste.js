const Sequelize = require ('sequelize')
const sequelize = new Sequelize('testedebd', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql'
})
/*   TENTA FAZER LOGIN NO MYSQL    */


sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso! ")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})
 

/*  CRIAR Models no SEQUELIZE    */
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
// Postagem.sync({force: true}) /* Só usar uma vez para não duplicar a tabela */

/*  CRIAR UMA ALGO EM UMA TABELA NO CASO POSTAGEM   */

// Postagem.create({
//     titulo: "blabla",
//     conteudo: "balbla balbla balbla balbla"
// })

