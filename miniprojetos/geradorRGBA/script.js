function gerarCor() {
    let red = document.getElementById("red").value
    let green = document.getElementById("green").value
    let blue = document.getElementById("blue").value
    let alpha = document.getElementById("alpha").value
    // let hexa = document.getElementById("hexa").value

    let cor = `rgb(${red},${green},${blue},${alpha/10})`

    document.getElementById("cor").style.background = cor

    // document.getElementById("hexa").innerHTML = `#${hexa}`
    document.getElementById("r").innerHTML = `R: ${red}`
    document.getElementById("g").innerHTML = `G: ${green}`
    document.getElementById("b").innerHTML = `B: ${blue}`   
    document.getElementById("a").innerHTML = `A: ${alpha/10}`

    document.getElementById("txtRed").innerHTML = `R: ${red}`
    document.getElementById("txtGreen").innerHTML = `G: ${green}`
    document.getElementById("txtBlue").innerHTML = `B: ${blue}`
    document.getElementById("txtAlpha").innerHTML = `A: ${alpha*10}%`

 

    setTimeout("gerarCor()",1)
}


