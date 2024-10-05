const toggleButton = document.getElementById("toggle-dark-mode");
const body = document.body;
const card = document.getElementById("card")
let divMensagem = document.querySelector("#mensagem")

//adicionar o evento de click
toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    card.classList.toggle("dark-mode");


    //atualiza o texto do botão quando clicar
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
    } else {
        toggleButton.textContent = "Dark Mode";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões com a classe 'btn-add'
    const buttons = document.querySelectorAll(".plus");

    buttons.forEach(function (button) {
        // Adiciona o evento de clique em cada botão
        button.addEventListener("click", function () {
            // Seleciona a mensagem usando o data-target
            const mensagemDiv = document.querySelector(button.getAttribute("data-target"));

            if (mensagemDiv.style.display === "none" || mensagemDiv.style.display === "") {
                mensagemDiv.style.display = "block";
                setTimeout(function () {
                    mensagemDiv.classList.add("mostrar");
                }, 10); // ddelay
            } else {
                // Esconde a resposta com transição suave
                mensagemDiv.classList.remove("mostrar");
                setTimeout(function () {
                    mensagemDiv.style.display = "none";
                }, 1000); // Tempo da transição
            }
        });
    });
});


/* Tentativa de colocar o JSON na primeira pergunta. (assisti numa aula)

let divMensagem = document.querySelector("#mensagem")

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
       dados.mensagem.map((mensagens) => {
        divMensagem.innerHTML += mensagens
       })
    })
})
    
Tenho tempo limitado durante a semana mas me esforcei bastante, aprendi diversas coisas incluindo o Json, mas não
consegui colocar ele no projeto mesmo tendo assistido bastante videoaula. Acredito que se estivesse mais 1 dia
conseguiria incrementar.

O background eu fiz desta forma pq achei muito legal os riscos verdes dando contraste no dark mode,
então não coloquei o retângulo verde que estava no figma.

*/
