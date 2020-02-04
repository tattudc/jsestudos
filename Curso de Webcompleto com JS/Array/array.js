console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) //Tamanho array
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Da um sort
console.log(aprovados)

delete aprovados[1] //Deleta
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 0) //Pode add e deletar
console.log(aprovados)