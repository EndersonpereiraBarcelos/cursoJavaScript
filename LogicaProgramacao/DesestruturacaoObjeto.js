const Pessoa = {
    nome: 'Enderson',
    sobrenome:'Barcelos',
    idade: 21,
    endereco: {
        rua: 'alguma',
        numero: 202
    }
}

const { sobrenome, ...resto} =  Pessoa

console.log(resto)