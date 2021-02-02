var vel = 90
var velperm = 80
console.log(`A velocidade do seu véiculo é ${vel}Km/h`)
if (vel > velperm) {
    multa = (vel - velperm) * 0.65
    console.log(`Você ultrapassou a velocidade máxima permitida! Você será MULTADO em: ${multa} R$`)
} else {
    console.log(`Você está dentro do limite de velocidade.`)
}
console.log(`Dirija com Segurança!`)
