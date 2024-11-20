// const pessoa1 = {
//     nome: "Enderson",
//     sobrenome: "Barcelos",
//     idade: 21
// }

// console.log((pessoa1.nome))

function CriaPessoa(name, surname, age) {
  return {
    name,
    surname,
    age,
  };
}

const pessoa1 = CriaPessoa("Enderson", "Barcelos", "21");

console.log(pessoa1.name, pessoa1.surname, pessoa1.age);