function Pessoa(nome){
    this.nome = nome//Declarar ou não vai ficar acessivel ou não

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
