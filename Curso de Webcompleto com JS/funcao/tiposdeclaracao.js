console.log(soma(3, 4)) //Uma function declaration já estará disponivel
//console.log(sub(4, 3)) //Function express não estará disponível

//Declaração de funções
function soma(x, y){
    return x + y
}

//Função expressa
const sub = function(x, y){
    return x - y
}

//Função expressa nomeada
const mult = function mult(x, y){
    return x * y
}