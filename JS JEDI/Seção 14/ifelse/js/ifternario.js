//Condicional Ternario
var periodo = "Noturno";
//var msg = exp ? true : false;
var mensagem = periodo == "matutino" ? "Bom dia" : "Olá";
console.log(mensagem);

var periodo = "Vespertino";
var mensagem2 = periodo == "Matutino" ? "Bom dia" : (periodo == "Vespertino" ? "Boa tarde" : "Boa Noite");
console.log(mensagem2);