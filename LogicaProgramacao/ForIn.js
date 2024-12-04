const pessoa = {
    nome: 'Enderson',
    sobrenome: 'Barcelos',
    idade:21
}

// console.log(pessoa.nome)
// console.log(pessoa['Nome','idade'])

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}