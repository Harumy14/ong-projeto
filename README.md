# Projeto Integrador Extensionista II — ONG

Projeto desenvolvido para a Atividade 1 da disciplina Projeto Integrador Extensionista II.

## Tecnologias utilizadas

- JavaScript
- Vite+
- Node.js
- Express
- HTML e CSS

## Funcionalidades

- API Express com a rota `GET /api/health`.
- Página inicial que consulta a API.
- Exibição do status da API, data e hora.
- Proxy do Vite+ para encaminhar as requisições `/api`.

## Como executar o projeto

### 1. Instalar as dependências

É necessário ter Node.js e pnpm instalados.

```bash
pnpm install
```

### 2. Iniciar a API

Em um terminal, execute:

```bash
pnpm api
```

### 3. Iniciar a página

Em outro terminal, execute:

```bash
vp dev
```

### 4. Abrir no navegador

Acesse:

http://localhost:5173/

## Testar a API

Acesse:

http://localhost:3000/api/health

A resposta esperada é:

```json
{"status":"ok"}
```
