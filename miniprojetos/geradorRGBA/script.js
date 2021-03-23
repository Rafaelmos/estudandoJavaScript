function gerarCor() {
    let red = document.getElementById("red").value
    let green = document.getElementById("green").value
    let blue = document.getElementById("blue").value

    let cor = `rgb(${red},${green},${blue},${10})`

    document.getElementById("cor").style.background = cor

    document.getElementById("txtRed").innerHTML = `R: ${red}`
    document.getElementById("txtGreen").innerHTML = `G: ${green}`
    document.getElementById("txtBlue").innerHTML = `B: ${blue}`
 

    setTimeout("gerarCor()",1)
}
