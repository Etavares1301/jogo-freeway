//imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarroVerde;

//
let somDaTrilha;
let somDaColisao;
let somDoPonto

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator.png");
  imagemCarro = loadImage("imagens/carro_azul.png");
  imagemCarroVerde = loadImage("imagens/carro_verde.png"); 
  imagemCarroVermelho = loadImage("imagens/carro_vermelho.png");
  imagemCaminhao =
loadImage("imagens/caminhão.png");
  imagemCarros = [imagemCarro, imagemCarroVerde, imagemCarroVermelho, imagemCaminhao, imagemCarroVerde, imagemCarroVermelho];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colisao.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}

