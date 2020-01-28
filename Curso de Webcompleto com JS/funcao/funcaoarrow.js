let dobro = function(a){
    return 2 * a
}
//Resumindo com arrow function
dobro = (a) => {
    return 2 * a
}
//Resumindo ainda mais
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' //Possui parametro
console.log(ola())
