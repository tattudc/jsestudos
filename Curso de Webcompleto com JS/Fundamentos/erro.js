function tratarErrorELancar(error){
    //throw new Error('....')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: error.name,
        msg: error.msg,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{ //tentar
        console.log(obj.name.toUpperCase() + '!!!!')
    }
    catch(e){ //tratar
        tratarErrorELancar(e)
    }
    finally{ //Sempre imprimir
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)