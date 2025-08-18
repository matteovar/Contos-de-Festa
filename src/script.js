// Função 1: Mostrar mensagem
function mostrarMensagem() {
  document.getElementById("mensagem").textContent =
    "Somos especialistas em tornar sua festa inesquecível!";
}

// Função 2: Trocar evento
const eventos = [
  "Festa de Halloween - 31/10",
  "Baile de Máscaras - 15/11",
  "Festa de Fim de Ano - 31/12",
];
let indiceEvento = 0;

function trocarEvento() {
  indiceEvento = (indiceEvento + 1) % eventos.length;
  document.getElementById("eventoAtual").textContent =
    "Evento atual: " + eventos[indiceEvento];
}

// Função 3: Mudar cor de fundo
function mudarCorFundo() {
  const cores = ["#fff8f0", "#f0fff8", "#f0f8ff", "#fff0f5"];
  const corAtual = document.body.style.backgroundColor;
  let novaCor;
  do {
    novaCor = cores[Math.floor(Math.random() * cores.length)];
  } while (novaCor === corAtual);
  document.body.style.backgroundColor = novaCor;
}
