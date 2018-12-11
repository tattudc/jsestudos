function exibeAlgo(){
    console.log("Hello World")
}
//Função que faz alguma função depois de um tempo
//Ter cuidado para não dar um break na função pq vai mostrar em eterno
//setInterval(exibeAlgo, 1000)

//Essa função faz com que mostre algo depois de x segundos(Tipo um delay)
setTimeout(exibeAlgo, 5000)
