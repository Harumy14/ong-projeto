
import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="container">
    <h1>Projeto da ONG</h1>
    <h2>Status da API: <span id="status">verificando...</span></h2>
    <p id="data-hora"></p>
    <p id="mensagem"></p>
  </main>
`;

async function verificarAPI() {
  const status = document.querySelector("#status");
  const dataHora = document.querySelector("#data-hora");
  const mensagem = document.querySelector("#mensagem");

  dataHora.textContent = "Data e hora: " + new Date().toLocaleString("pt-BR");

  try {
    const resposta = await fetch("/api/health");

    if (!resposta.ok) {
      throw new Error("Erro ao consultar a API");
    }

    const dados = await resposta.json();

    status.textContent = dados.status;
    mensagem.textContent = "API conectada com sucesso!";
  } catch (erro) {
    status.textContent = "indisponível";
    mensagem.textContent = "Não foi possível conectar à API.";
    console.error(erro);
  }
}

verificarAPI();
