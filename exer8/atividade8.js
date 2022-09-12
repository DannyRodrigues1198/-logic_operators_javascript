const custoString = prompt ('digite o custo de fabrica do  carro:')
const custo = Number (custoString)

const custoFinal = (custo * 0.28 + custo * 0.45)+ custo

console.log(`o custo final do carro é de:${custoFinal}`)