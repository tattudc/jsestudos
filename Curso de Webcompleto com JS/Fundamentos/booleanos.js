let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
// (!isAtivo) = verdadeiro - uma exclamação concorda
// (!!isAtivo) = falso - duas exclamações discorda
// (!!true) = falso 

console.log("os verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!('' || null || 0 || ' '))

let nome = '' //se substituir fica o nome substituido
console.log(nome || 'Desconhecido')