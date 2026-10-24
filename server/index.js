import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/health", (req, res) => {
  // Retorna o status da API para a página inicial.
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});