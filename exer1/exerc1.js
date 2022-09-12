const anos = Number( prompt ('digite quantos anos de vida'));
const meses = Number( prompt ('digite quantos meses de vida'));
const dia = Number( prompt ('digite quantos dias de vida'));

const dias = (anos*365) + (meses*30) + dia;

document.write (`\nVocê tem ${dias} dias de vida`);