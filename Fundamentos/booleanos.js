let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)


let nome = ""
console.log(nome)
console.log(nome || "Desconhecido") // || faz imprimir a primeira opção verdadeira.
nome = "Lucas"     
console.log(nome || "Desconhecido")
