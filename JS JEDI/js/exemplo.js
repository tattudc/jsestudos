//fuctional
function sejaBemVindo(){
	console.log("Seja bem vindo ao curso de Mestre Jedi em JS");
}

console.log("Chamando a função sejaBemVindo");
sejaBemVindo();

//POO
var objProfessor = {
	nome: "Madson Aguiar",
	curso: "JS Jedi",
	ministraAula: function(){
		console.log("Ministrando aula de JS");
	},
};
//Acessando o objeto
console.log("Chamando o objeto professor")
console.log(objProfessor);
console.log(objProfessor.nome);
console.log(objProfessor.curso);
console.log(objProfessor.ministraAula);

//acessando metodo
console.log("Acessando metodo");
objProfessor.ministraAula();