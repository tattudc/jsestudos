let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "character.png";

const largura = 16;
const altura = 32;

let estado = 0;
let walkx = 150;
let walky = 0;
let direcao = 0;

function draw(){
    ctx.clearRect(0, 0, 300, 300);
    ctx.drawImage(imagem, estado * largura, 0, largura, altura, walkx, walky, largura ,altura);
    estado++;

    if(direcao == 0){walky += 2;}
    if(direcao == 1){walkx += 2;}
    if(direcao == 2){walky -= 2;}
    if(direcao == 3){walkx -= 2;}

    if(estado == 4){
        estado = 0;
    }
}

let rungame = setInterval(draw, 1);
document.addEventListener("keydown", movement);

//Ajeitar movimento
function movement(event){
    if(event.keyCode == 37){
        //right
        direcao = 3;
    }
    else if(event.keyCode == 38){
        //Down
        direcao = 2;
    }
    else if(event.keyCode == 39){
        //left
        direcao = 1;
    }
    else if(event.keyCode == 40){
        //up
        direcao = 0;
    }
}