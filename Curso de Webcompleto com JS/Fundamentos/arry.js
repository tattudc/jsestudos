const valor = [7.7, 8.9, 6.3, 9.2]
console.log(valor[0], valor[3])
console.log(valor[4]) //Saber o valor

valor[4] = 10 //add valores
console.log(valor)
console.log(valor.length) //quantos elementos tem

valor.push({id: 3}, false, null, 'teste') //objeto, boolean, nulo e teste
console.log(valor)

console.log(valor.pop()) // vai tirar o ultimo valor do array e retornar na tela 
delete valor[0] //delete um valor
console.log(valor)

console.log(typeof valor) //saber o tipo - nesse caso o array é um objeto