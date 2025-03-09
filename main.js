function calcularTempo(desde) {
	let agora = new Date();
	let diferenca = agora - desde;

	let anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
	diferenca %= (1000 * 60 * 60 * 24 * 365);
	let meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
	diferenca %= (1000 * 60 * 60 * 24 * 30);
	let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
	diferenca %= (1000 * 60 * 60 * 24);
	let horas = Math.floor(diferenca / (1000 * 60 * 60));
	diferenca %= (1000 * 60 * 60);
	let minutos = Math.floor(diferenca / (1000 * 60));
	diferenca %= (1000 * 60);
	let segundos = Math.floor(diferenca / 1000);

	return `${anos} ano ${meses} meses ${dias} dias ${horas} horas ${minutos} minutos e ${segundos} segundos`;
}

function atualizarTexto() {
	let desde = new Date("2024-01-07T00:00:00"); // Mude para a data que quiser
	let elemento = document.getElementById("tempo");
	if (elemento) {
		elemento.textContent = calcularTempo(desde);
	}
}

setInterval(atualizarTexto, 1000); // Atualiza a cada segundo
