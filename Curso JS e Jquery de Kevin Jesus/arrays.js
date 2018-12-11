//Arrays ou vetores
//Arrays funciona como base de indices, já o objetos tem indices e valores
var alunos = ["João", "Pedro", "Tato", "Edi", ["Magda", "Ale", "Beni"], {pessoa: "Tato", idade: 32}]

//acessar toda a Array
console.log(alunos)
//acessar a Array de indice 0
console.log(alunos[0])
//acessar a Array que esta dentro da Array
console.log(alunos[4])
//Selecionar um item da Array dentro de outra Array
console.log(alunos[4][2])
//Acessar o objeto
console.log(alunos[5])
//Acessar item especifico do objeto
console.log(alunos[5].pessoa)
//Acessar o comprimento da Array
console.log(alunos.length)