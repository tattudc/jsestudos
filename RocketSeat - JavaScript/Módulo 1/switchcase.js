function retornaSexo(sexo){
    //M, F
    //Masculino, Feminino
    switch (sexo) {
        case "M":
        return "Masculino"
        case "F":
        return "Feminino"
        default:
        return "Outro"
    }
}
var resultado = retornaSexo("oiuoiu")
console.log(resultado)