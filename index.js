// Crie um objeto de áudio
const tickSound = new Audio("tick.wav"); // Certifique-se de que o arquivo de som está na mesma pasta

// Reproduz o som quando a página carrega
// Defina o horário de liberação (ano, mês-1, dia, hora, minuto, segundo)
const releaseDate = new Date(2025, 2, 9, 9, 38, 0); // 5 de março de 2025, 00:00:00

function updateTimer() {
    tickSound.play();
    const now = new Date();
    const timeLeft = releaseDate - now;

    if (timeLeft <= 0) {
        // Redireciona para a outra página quando o tempo acabar
        window.location.href = "main.html";
    } else {
        // Calcula horas, minutos e segundos restantes
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Atualiza o timer na página
        document.getElementById("timer").innerText =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Atualiza o timer a cada segundo
setInterval(updateTimer, 1000);
updateTimer(); // Chama a função imediatamente para evitar atraso inicial