//and or not
//&& - operador and(e), se os dois termos forem verdadeiros então a expressão é verdadeira
//|| - operador or(ou), se um dos termos forem verdadeiros então a expressão é verdadeira
//!= - operador and(e), se os termos não forem verdadeiros então a expressão é verdadeira
var sexo = "M", idade = 23
if(sexo === "M" && idade >= 18){
    console.log("Ok")
}
var sexo2 = "F", idade = 21
if(sexo2 === "M" || idade >= 18){
    console.log("OK2")
}
var sexo3 = "M", idade = 12
if(sexo3 !== "F" != idade >=18){
    console.log("OK3")
}