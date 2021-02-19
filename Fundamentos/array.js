var valores = [7.7, 8.8, 9.3, 7.2]

console.log(valores[0], valores[3])

console.log(valores)
console.log(valores.length) //ver quantas "casas" tem a array/vetor/lista.

valores[2] = 7 //adiciona ou modifica um casa com um valor.
valores.push(9) //adiciona um novo valor em uma nova casa no final.
console.log(valores)

console.log(typeof valores) //descobre o tipo da variavel/let/const
console.log(valores.pop()) //apaga o ultimo numero e printa ele

valores.push("cenoura", "batata", "amigo")
console.log(valores)

valores.sort()  //coloca a lista em ordem crescente e alfabetica
console.log(valores)


/*Formas de exibir todos os indides de uma lista de cada vez

for (let index = 0; index < valores.length; index++) {
    console.log(`A string ou o valor da posição da casa ${index} é ${valores[index]}`)
}
*/
for (let index in valores) {
    console.log(`A string ou o valor da posição da casa ${index} é ${valores[index]}`)
}

valor1= valores.indexOf(7) //Procurar o valor ou uma string em uma lista
valor2= valores.indexOf(500)
if (valor2 == -1) { //Quando um valor de um indexOf não existe o resultado retornado é -1
    valor2 = "Não encontrado"
}
console.log(`Valor 1: ${valor1}\nValor 2: ${valor2}`)