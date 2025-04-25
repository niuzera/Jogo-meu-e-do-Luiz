
// Capturar o elemento canvas e configurar o contexto de desenho
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Capturar as teclas pressionadas
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};


// Definir tamanho do canvas
canvas.width = 800;
canvas.height = 600;

// Carregar imagem do personagem
const playerImg = new Image();
playerImg.src = "imagens/personagem.png"; // Certifique-se que está no caminho certo


// Criar objeto do personagem
const player = {
    x: canvas.width / 2 - 15, // Centralizado na tela
    y: canvas.height / 2 - 15,
    width: 30,
    height: 30,
    speed: 5
};



// Função para desenhar o personagem com imagem
function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height); // Desenha o sprite
}


// Atualizar o jogo com a movimentação e a imagem
function updateGame() {
    movePlayer(); // Atualiza posição
    drawPlayer(); // Desenha o sprite do personagem
    requestAnimationFrame(updateGame); // Mantém o loop do jogo
}


// Iniciar o loop do jogo
updateGame();

// Detectar quando uma tecla é pressionada
window.addEventListener("keydown", (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = true;
    }
});

// Detectar quando uma tecla é solta
window.addEventListener("keyup", (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = false;
    }
});

// Atualizar a posição do personagem com base nas teclas pressionadas
function movePlayer() {
    if (keys.ArrowUp && player.y > 0) player.y -= player.speed;
    if (keys.ArrowDown && player.y + player.height < canvas.height) player.y += player.speed;
    if (keys.ArrowLeft && player.x > 0) player.x -= player.speed;
    if (keys.ArrowRight && player.x + player.width < canvas.width) player.x += player.speed;
}

// Atualizar o jogo para incluir movimento
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar a tela
    movePlayer(); // Atualizar posição do personagem
    drawPlayer(); // Redesenhar personagem
    requestAnimationFrame(updateGame); // Continuar atualização
}

// Iniciar novamente o loop do jogo
updateGame();