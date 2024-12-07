/**
 *  Escreva uma funçao chamada ePaisagem que recebe dois argumentos, largura e altura de uma paisagem.
 *  Retorne true se a imagem estiver no modo paisagem
 * 
 */

function ePaisagem(largura, altura) {
    return largura > altura ? true : false  // Retorna true se a largura for maior que a altura
} 

console.log(ePaisagem(1920, 1080))