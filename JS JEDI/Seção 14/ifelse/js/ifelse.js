//if else
var condicao = true;
var condicao2 = false;
//Se houver só uma estrutura dentro do bloco if e else não é necessario chaves
if(condicao)
	console.log("Entrou no bloco if");
else
	console.log("Entrou no else");

//Como há duas estruturas há necessidade de chaves.
if(condicao2){
	console.log("Entrou no bloco if");
	console.log("Bloco if com chaves");
}
else{
	console.log("Entrou no else");
	console.log("Bloco else com chaves");
}

var texto = "JS";

if(texto == "js"){
	console.log("O texto é js");
}
else if(texto == "Js"){
	console.log("O texto é Js");
}
else if(texto == "jS"){
		console.log("O texto é jS");
}
else{
		console.log("É JS maiusculo");
}

condicao = true;
var cliente = "Maria";
if(condicao == true){
	if(cliente == "Maria"){
		console.log("Cliente é Maria");
	}
	else{
		console.log("Cliente não é a Maria");
	}
}
else{
	console.log("Condição não é true");
}