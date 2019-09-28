//código do ator
let xAtor = 60;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 60, 30);
  
  }

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
    }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
} 

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarro[i], espessuraCarro[i], xAtor, yAtor, 5,)
  if(colisao){
    voltaAtorPosicaoInicial();
    if(pontosMaiorQueZero()){
    meusPontos -=1;
      }
    }
  }
}
function voltaAtorPosicaoInicial(){
    yAtor = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(35);
  fill(255, 255, 0);
  stroke(0);
  text(meusPontos, width / 3, 35);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 370
}