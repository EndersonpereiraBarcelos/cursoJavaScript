const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let numero of numeros) {
  if (numero === 2) {
    continue;
  } else if (numero == 5) {
    console.log("Parou no 5");
    break;
  }
  console.log(numero);
}
