var nome;//Variavel sem inicializar o que significa Undefined	
console.log(nome);

nome = "Tato"; //Atribuindo e iniciando a variavel
console.log(nome);

nome = null; //libera espaço em memória

console.log("Undefined == null: ", undefined == null);
console.log("Undefined: ", typeof undefined);
console.log("Null: ", typeof null);
console.log("Undefined === null: ", undefined === null);