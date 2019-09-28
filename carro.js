//código do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 75, 145, 195, 245, 310];
let velocidadeCarros = [2, 2.5, 3.2, 3, 4, 1.7];
let comprimentoCarro = [65, 125, 95, 135, 125, 95];
let espessuraCarro = [35, 75, 45, 65, 75, 45]

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro[i], espessuraCarro[i]);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros [i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i< imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    }  
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 130;
}