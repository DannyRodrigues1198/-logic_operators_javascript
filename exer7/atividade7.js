 const aString = prompt ('digite o valor de a:')
 const a = Number (aString)

const bString = prompt ('digite o valor de b:')
const b = Number (bString)

const cString = prompt ('digite o valor de c:')
 const c = Number (cString)

const dString = prompt ('digite o valor de d:')
const d = Number (dString)

const eString = prompt ('digite o valor de e:')
const e = Number (eString)

const fString = prompt ('digite o valor de f:')
const f = Number (fString)

const x = (c * e - b * f) / (a * e - b * d)
const y = (a * f - c * d) / (a * e - b * d)

console.log(`O valor de x é :${x} e o valor de y é:${y}`)