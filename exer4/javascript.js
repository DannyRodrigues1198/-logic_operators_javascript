
const numA = Number (prompt('Digite o numero A: '));
const numB = Number (prompt('Digite o numero B: '));
const numC = Number (prompt('Digite o numero C: '));

const numR = Math.pow((numA + numB), 2);
const numS = Math.pow((numB + numC), 2);

const numD = (numR + numS) / 2;

document.text (`\nanswer: ${numD}`);