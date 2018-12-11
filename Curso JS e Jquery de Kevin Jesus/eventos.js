//Eventos onload
//Evento começa quando a página for carregada
window.onload = function(){
    console.log("Página carregada")
    alert("Página Carregada")
}
//onclick - Cria uma variavel e pega o elemento pelo ID do botão e depois fazer um evento de
//click e a função - a partir do evento criado e com a função definida, tudo pode ser alterado
//click
var botao = document.getElementById("clicado")
botao.addEventListener("click", function(){
    console.log("Click")
})
//mouseover e mouseleave são eventos que acontecem quando passa e tira o mouse de cima do elemento
var link = document.getElementById("link")
var trs = document.getElementsByClassName("tr")
link.addEventListener("mouseover", function(){
    link.classList.add("link")
})
link.addEventListener("mouseleave", function(){
    link.classList.remove("link")
    for(var i = 0; i < trs.length; i++){
        trs[i].addEventListener("mouseover", function(){
            this.classList.add("tractive")
        })
        trs[i].addEventListener("mouseleave", function(){
            this.classList.remove("tractive")
        })
    }
})
//change é um evento que quando mudar o item indica uma ação
var linguagens = document.getElementById("linguagens")
        linguagens.addEventListener("change", function(){
            var options = this.options
            var itemAtual = this.selectedIndex
            console.log(options[itemAtual].text)
        })

//keyup é um evento serve para atribuir um valor digitado em outro lugar
var text = document.getElementById("search");
            var result = document.getElementById("result");
            var resultDefaultTex = "Nenhum Resultado"

            text.addEventListener("keyup", function(){
                var value = this.value
                if(value != "")
                    result.innerText = this.value
                else
                    result.innerText = resultDefaultTex
            })

//keypress é um evento que ocorre quando pressiona a tecla enter
var text = document.getElementById("text")
var result = document.getElementById("result")

const teclaenter = 13
text.addEventListener("keypress", function(evento){
    if(evento.keyCode == teclaenter)
    result.style.display = "block"
})
//Submit é um evento