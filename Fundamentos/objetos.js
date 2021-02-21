let amigo = {nome:"José",
sexo:"M",
peso:68.9,
engordar(p=0){
    console.log(`${amigo.nome} Engordou`)
    this.peso += p 
}}


console.log(`O nome é ${amigo.nome} e ele pesa ${amigo.peso}Kg`)
amigo.engordar(5)
console.log(`O nome é ${amigo.nome} e ele pesa ${amigo.peso}Kg`)

