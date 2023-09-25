const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = [
    'musicas/ballena.mp3',
    'musicas/doja.mp3',
    'musicas/i like.mp3',
    'musicas/kay.mp3',
    'musicas/kream.mp3',
    'musicas/libianca.mp3.mp3',
    'musicas/meca.mp3',
    'musicas/novo.mp3',
    'musicas/poesia.mp3',
    'musicas/rush.mp3.mp3',
];

let currentSongIndex = 0;

function loadSong() {
    audio.src = songs[currentSongIndex];
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audio.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
}

loadSong();

playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);






const musicas = [
    {
        nome: "Ballena",
        artista: "Veigh, MC PH, Vulgo FK",
        src: "ballena.mp3",
    },
    {
        nome: "",
        artista: "",
        src: "",
    },
    // Adicione mais músicas aqui
];

let musicaAtualIndex = 0; // Índice da música atual

// Obtém elementos de áudio e informações de áudio
const audio = document.getElementById("audio");
const nomeDaMusica = document.getElementById("nome-da-musica");
const nomeDoArtista = document.getElementById("nome-do-artista");

// Função para atualizar as informações da música
function atualizarInformacoesDaMusica() {
    const musicaAtual = musicas[musicaAtualIndex];
    nomeDaMusica.textContent = musicaAtual.nome;
    nomeDoArtista.textContent = musicaAtual.artista;
    audio.src = musicaAtual.src;
}

// Função para tocar a próxima música
function tocarProximaMusica() {
    musicaAtualIndex = (musicaAtualIndex + 1) % musicas.length; // Circula pelas músicas
    atualizarInformacoesDaMusica();
    audio.play();
}

// Event listeners para os botões de controle
document.getElementById("next-button").addEventListener("click", tocarProximaMusica);

// Inicialização
atualizarInformacoesDaMusica();
