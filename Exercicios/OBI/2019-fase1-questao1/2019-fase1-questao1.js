let M = 120
let A = 13
let B = 12
let C = M - A - B

if (A>C && A>B) {
    Maiorfilho = "A"
    MaiorIdade = A 
} else if(B>A&&B>C ){
    Maiorfilho = "B"
    MaiorIdade = B
} else {
    Maiorfilho = "C"
    MaiorIdade = C
}

if (A+B>M || C+A>M || B+C>= M) {
    console.log ("ERRO idades não batem")
} else 
    if (A != B && 40 <= M && M <= 110) {
        if (M >= A && A>= 1 && M >= B && B>= 1) {
            console.log(`O filho mais velho de Dona Mônica é ${Maiorfilho} e sua idade é ${MaiorIdade}` )
        } else {
            console.log("Ocorreu algum erro")
        }}
    else {
        console.log ("ERRO. Filho A e B não podem ter a mesma idade ou a Mãe está com a idade fora dos limites")
}