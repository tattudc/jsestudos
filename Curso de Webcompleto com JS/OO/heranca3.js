const pai = {nome: 'Pedro', corCabelo: 'Preto'}
const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo)

const filha1 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha1.nome)
filha1.nome = 'Carla'
console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha1))

for(let key in filha1){
    filha1.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}