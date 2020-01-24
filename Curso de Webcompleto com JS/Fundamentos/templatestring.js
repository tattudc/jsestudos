const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `
    Olá 
    ${nome}!` //Não usa aspas simples e sim o simbolo da crase
console.log(concatenacao, template)

//expressões..
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)