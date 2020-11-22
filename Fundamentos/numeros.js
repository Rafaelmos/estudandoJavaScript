const peso1 = 1.0
const peso2 = Number("2.2")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avalicao1 = 9.844
const avalicao2 = 6.458

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))  // deixar em X casas decimais
console.log(media.toString(2)) // converte em binario caso tenha o número 2



