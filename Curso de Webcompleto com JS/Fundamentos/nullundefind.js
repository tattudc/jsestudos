let valor //nao inicializada
//se nao declarar e mandar imprimir da erro
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) vai dar erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
