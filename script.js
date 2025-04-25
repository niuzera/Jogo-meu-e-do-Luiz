document.addEventListener("DOMContentLoaded", () => {
    const personagem = document.getElementById("personagem");

    const rect = personagem.getBoundingClientRect();
    let posX = rect.left;
    let posY = rect.top;

    const speed = 3;
    const teclasPressionadas = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };

    function atualizarPosicao() {
        let movendo = false;

        if (teclasPressionadas.ArrowUp) {
            posY -= speed;
            movendo = true;
        }
        if (teclasPressionadas.ArrowDown) {
            posY += speed;
            movendo = true;
        }
        if (teclasPressionadas.ArrowLeft) {
            posX -= speed;
            movendo = true;
        }
        if (teclasPressionadas.ArrowRight) {
            posX += speed;
            movendo = true;
        }

        personagem.style.position = "absolute"; // garante controle
        personagem.style.left = `${posX}px`;
        personagem.style.top = `${posY}px`;

        if (movendo) {
            personagem.classList.add("movendo");
        } else {
            personagem.classList.remove("movendo");
        }

        requestAnimationFrame(atualizarPosicao);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key in teclasPressionadas) {
            teclasPressionadas[event.key] = true;
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key in teclasPressionadas) {
            teclasPressionadas[event.key] = false;
        }
    });

    atualizarPosicao();
});

