function calcImc(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
    let imc = peso/(altura * altura);
    let situacao = document.getElementById("situacao");
    if(imc < 18.5){
        situacao.innerText = "Abaixo do peso";
        situacao.style.color = 'red';
    }
    else if(imc >= 18.5 && imc < 24.9){
        situacao.innerText = "Peso ideal(Parabéns)";
        situacao.style.color = 'green';
    }
    else if(imc >= 24.9 && imc < 29.9){
        situacao.innerText = "Sobrepeso";
        situacao.style.color = 'yellow';
    }
    else if(imc >= 29.9 && imc < 34.9){
        situacao.innerText = "Obesidade grau I";
        situacao.style.color = 'red';
    }
    else if(imc >= 34.9 && imc < 39.9){
        situacao.innerText = "Obesidade grau II(Severa)";
        situacao.style.color = 'red';
    }
    else{
        situacao.innerText = "Obesidade grau III(Mórbida)";
        situacao.style.color = 'red';
    }

    let result = document.getElementById("result");
    result.innerText = imc.toFixed(2);

    }