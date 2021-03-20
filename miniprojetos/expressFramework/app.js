const numeros = [1,2,3,4,5]
const apenasNumerosImpares = numeros.filter((numero, indice, array) => {
    return numero % 2 !== 0;
});
console.log(apenasNumerosImpares)
/**
 * Saida 
 * [ 1, 3, 5 ]
 */