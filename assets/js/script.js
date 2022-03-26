const button = document.querySelector('button')
const textArea = document.querySelector('#nomes')
const abrePopUp = document.querySelector(".resultado")
const botaoFecha = document.querySelector(".fechaPopUp")


function pegarNomes(){
    const valorCampo = textArea.value
    const arrNomes = valorCampo.split(',')
    return arrNomes[geraNumeroAleatorio(arrNomes.length)]
}

function geraNumeroAleatorio(tamanho){
    const numero = Math.floor(Math.random()*tamanho)
    return numero
}

function mostraVencedor(){
    let vencedor = document.querySelector(".vencedor")
    abrePopUp.classList.add("mostraResultado")
    resultado = pegarNomes()
    vencedor.innerText = `Resultado: ${resultado}`
}

function fechaPopUp(){
    abrePopUp.classList.remove("mostraResultado")
}

button.addEventListener("click", mostraVencedor)
botaoFecha.addEventListener("click", fechaPopUp)
    
