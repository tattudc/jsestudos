//Pessoa => 123 => {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' //pode atribuir para pessoa.nome
console.log(pessoa)

//pessoa <= 456 => {...}
//pessoa = {nome: 'Ana'} //Não pode atribuir pro objeto

Object.freeze(pessoa) //O objeto vira uma constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)