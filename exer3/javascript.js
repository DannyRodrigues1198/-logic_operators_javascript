const tempo = Number(prompt('Insira o tempo de duração do evento em segundos: '));

const horas = (tempo / 3600).toFixed(0);
const minutos = ((tempo % 3600) / 60).toFixed(0);
const segundos = ((tempo % 3600) % 60).toFixed(0);

document.write (`O evento durou: ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);