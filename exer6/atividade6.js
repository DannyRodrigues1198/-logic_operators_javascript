const x1String = prompt ('insira o valor de x1:')
const x1 = Number (x1String)

const y1String = prompt ('insira o valor de y1')
const y1 = Number (y1String)

const x2String = prompt ('insira o valor de x2')
const x2 = Number (x2String)

const y2String = prompt ('insira o valor de y2')
const y2 = Number (y2String)

const D = Math.sqrt (Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2))

console.log(`A distancia entre o ponto 1 e o 2 é de:${D}`)