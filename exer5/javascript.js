
		
const primeiraNota = Number(prompt('Digite a nota do 1º teste: '));
const segundaNota = Number(prompt('Digite a nota do 2º teste: '));
const terceiraNota = Number(prompt('Digite a nota do 3º teste: '));

const media = (2 * primeiraNota) + (3 * segundaNota) + (5 * terceiraNota) / 10;

document.text (`The weighted average is: ${media}`);