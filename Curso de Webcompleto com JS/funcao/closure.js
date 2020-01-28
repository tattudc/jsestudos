//Closure é o escopo criado onde uma função foi declarada
//Esse escopo permite a função acessar e manipular varáveis externas à função

//Contexto lexico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())