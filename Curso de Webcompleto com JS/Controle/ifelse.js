const imprimiResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }
    else{
        console.log('Recuperação!')
    }
}

imprimiResultado(10)
imprimiResultado(4)
imprimiResultado('Epa!') //Cuidado!! Lembre de tratar!