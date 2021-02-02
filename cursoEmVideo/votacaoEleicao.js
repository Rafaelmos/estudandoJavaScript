var idade = 66
if (idade < 16) {
    var resposta = ("você não pode votar")
} else if (idade < 18 || idade > 65){ 
        var resposta = ("seu voto é opcional")
    } else {
        var resposta = ("seu voto é obrigatório")
    }
console.log(`Você tem ${idade} anos, por isso ${resposta}`)
