function Random( min, max){
    const ContRandom = Math.random() * ( max - min ) + min
    return Math.floor(ContRandom)
}

const min = 1
const max = 50
let rand = 10 

while (rand !== 10 ){
    console.log(rand)
}
console.log('####')

do{
    console.log(rand)
}while(rand !== 10)

// let rand = Random(min, max)

// while (rand !== 10 ){
//     rand = Random(min, max)
//     console.log(rand)
// }