/* Operadores em ordem de resolução
1º Aritmeticos
2º Relacionais
3º Lógicos  */


// Operadores Relacionais
console.log("___Operadores Relacionais___")
/*
Igualdade ( == )
Diferente ( != )
Maior que ( > )
Menor que ( < )
Maior ou Igual ( >= )
Menor ou Igual ( <= )   
É identico ou mesmo valor e tipo ( === )    */

console.log(`5 é maior que 6: ${5>6}`)
console.log(`5 é menor que 6: ${5<6}`)
console.log(`6 é maior ou igual que 6: ${6>=6}`)
console.log(`5 é menor ou igual que 6: ${5<=6}`)
console.log(`6 é diferente de 6: ${6!=6}`)
console.log(`6 é igual a 6: ${6==6}`)
console.log(`5 é identico a string de 5: ${5==='5'}`)
console.log(`5 é igual a string de 5: ${5=='5'}`)

// Operadores Lógicos
console.log("___Operadores Lógicos___")
/*
Negação ( ! ) ( não )
Conjunção ( && ) ( e )
Dijunção ( || )  ( ou ) */


console.log("___Operadores Ternário___")
/*
teste ( ? ) true ( : ) ( false)
Se for verdadeiro imprima true, se não imprima falso
*/
var media1 =  6
var media2 =  7

console.log(media1 >= 7 ? "Aprovado" : "Reprovado")
console.log(media2 >= 7 ? "Aprovado" : "Reprovado")


