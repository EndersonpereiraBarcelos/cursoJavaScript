function ZeroEsquerda(num){
    return num >= 10 ? num : `0${num}` 
}

function formatarData(data){
    const dia = ZeroEsquerda(data.getDate())
    const mes  = ZeroEsquerda(data.getMonth() + 1);
    const ano = ZeroEsquerda(data.getFullYear())
    const hora = ZeroEsquerda(data.getHours())
    const min = ZeroEsquerda(data.getMinutes())
    
    return `
    ${dia}/${mes}/${ano} ${hora}:${min}
    `
}

const data = new Date()
const DataBrasil = formatarData(data)
console.log(DataBrasil)