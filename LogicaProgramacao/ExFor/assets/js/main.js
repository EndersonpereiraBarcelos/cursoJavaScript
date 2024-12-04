const elementos = [
    {tag:'p', texto:'frase 1'},
    {tag:'div', texto:'frase 2'},
    {tag:'footer', texto:'frase 3'},
    {tag:'section', texto:' frase 4'},

]

const container = document.querySelector('.container')

const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    // console.log(elementos[i].tag)
    let { tag, texto } = elementos[i]
    let TagCriada = document.createElement(tag)
    TagCriada.innerText = texto
    div.appendChild(TagCriada)
    // console.log(tag, texto)
    container.appendChild(TagCriada)
}

// function addElement(){
    
//     var newParagrafo = document.createElement('P')
//     var texto = document.createTextNode('Texto para teste')
    
//     newParagrafo.appendChild(texto)
//     var container = document.getElementById('container')
//     container.appendChild(newParagrafo)

// }




