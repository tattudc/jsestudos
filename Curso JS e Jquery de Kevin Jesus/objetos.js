//Objeto é uma variável com vários dados
var pessoa = {
    nome: "Tato",
    idade: 32,
    peso: 102.5,
    humano: true,
    membros: {
        pernas: 2,
        bracos: 2,
    }
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.peso)
if(pessoa.humano == true){
    console.log("Humano")
}
console.log("A pessoa tem " + pessoa.membros.bracos+ " Braços ")