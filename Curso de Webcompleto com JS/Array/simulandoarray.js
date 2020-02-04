const quaseArray = {0: 'Array', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumrable: false
})

console.log(quaseArray)

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)