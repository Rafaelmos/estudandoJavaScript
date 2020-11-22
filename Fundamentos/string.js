var escola = "Falv3rn"

console.log(escola.charAt(4))
console.log(escola.charAt(5))  //não ira aparecer erro, porém o console não vai imprimir nada
console.log(escola.charCodeAt(3))

console.log(escola.substr(0, 3))
console.log(escola.substring(0, 3))

console.log("Nickname: ".concat(escola.concat("!")))

escola = escola.replace(/\d/, 'e')
console.log("Nickname: ".concat(escola.concat("!")))
console.log("Nickname: " + (escola) + ("!"))



console.log("Ana, Maria, Pedro, Rafael".split(", "))
