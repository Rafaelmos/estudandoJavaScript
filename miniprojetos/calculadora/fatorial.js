let fatorial = function(numA) {
    let resultado = 1;
    for (let i = numA; i > 1; i--) {
        resultado *= i;
    }
return resultado
}


module.exports = fatorial