
const dias = Number (prompt('digite quantos dias de vida: '));

const ano = (dias / 365).toFixed(0);
const meses = ((dias % 365) / 30).toFixed(0);
const dia = ((dias % 365) % 30).toFixed(0);

document.weite (`Você tem ${dia} dias, ${meses} meses e ${ano} anos de vida`);