// //Escreva uma função que recebe 2 numero e retorne o maior deles
// Melhoria, solicitar ao usuario os numeros

const num1 = 20
const num2 = 10

function MaiorNumero() {

  if (num1 > num2) {
    console.log(`Maior numero é ${num1}`);
  } else if (num2 > num1) {
    console.log(`Maior numero é ${num2}`);
  } else {
    console.log("Numero são iguais");
  }
}

MaiorNumero();
