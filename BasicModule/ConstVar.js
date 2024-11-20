const name = "enderson";
const idade = 21;
let peso = 82.0;
let altura = 2.01;

const AnosNascimento = 2024 - idade;

let imc = peso / (altura * altura);
//console.log(imc)
console.log(
  name,
  "Nasceu em",
  AnosNascimento,
  "tem",
  idade,
  "anos",
  "seu IMC é",
  imc,
);

console.log(
  `${name} nasceu em ${AnosNascimento}, e tem ${idade} anos mas seu Indice de massa corporal é de ${imc}`,
);
