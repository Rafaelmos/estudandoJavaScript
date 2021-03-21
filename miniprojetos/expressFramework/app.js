const express = require("express") 
const app = express()


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/Ola/:cargo/:nome", function(req, res){ // Quando adicionamos /:VARIAVEL é tipo adicionar um parâmetros.
    res.send("<h1>Olá "+req.params.nome+"</h1> "+"<h2>Seu cargo é: "+req.params.cargo+"</h2>")    // Então para acessar seria http://localhost:8081/blog/programador/Rafael, como exemplo.
})



/* É preciso deixar esse bloco no final*/
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")

})