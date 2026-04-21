# Study Hub API

API backend minimalista para o projeto Study Hub — ponto de partida para gerenciar conteúdos e rotas de estudo.

**Status:** Em desenvolvimento

**Tecnologias:** Node.js, Express, dotenv, tsx (watch)

## Pré-requisitos
- Node.js (recomendado v16+)
- npm ou yarn
- Docker & Docker Compose (opcional)

## Instalação

1. Clone o repositório:

```
git clone https://github.com/lacort/study-hub-api.git
cd study-hub-api
```

2. Instale dependências:

```
npm install
```

3. Crie um arquivo `.env` na raiz com as variáveis de ambiente necessárias (exemplo abaixo).

## Variáveis de ambiente (exemplo)

```
PORT=3000
NODE_ENV=development
# DATABASE_URL=sqlite://... OR postgres://user:pass@host:port/db
```

Adapte conforme as necessidades do projeto.

## Scripts úteis

- `npm run dev` — executa em modo desenvolvimento (usa `tsx watch server.ts` conforme `package.json`).

> Observação: o `package.json` referencia `server.ts` para desenvolvimento; ajuste conforme a versão JS/TS do projeto.

## Executando com Docker

Se desejar rodar com Docker Compose:

```
docker-compose up --build
```

## Estrutura do projeto

- `server.js` — ponto de entrada (atualmente vazio/no-boilerplate)
- `src/` — código-fonte da aplicação
  - `components/`
  - `controllers/`
  - `modules/`
  - `routes/`
- `config/` — arquivos de configuração
- `test/` — testes

Adapte conforme os padrões usados internamente.

## Rotas e API

As rotas principais devem ficar em `src/routes/`. Importe e monte os routers em `server.js` ou `server.ts` conforme a entrada do projeto.

## Desenvolvimento

1. Instale dependências (`npm install`).
2. Configure `.env`.
3. Rode em desenvolvimento: `npm run dev`.

## Testes

Adicione comandos de teste no `package.json` conforme a ferramenta escolhida (jest, vitest, etc.).

## Contribuição

- Fork do repositório
- Crie uma branch feature/fix com o prefixo descritivo
- Abra um pull request com descrição clara das mudanças

## Licença

Licenciado sob `ISC` (ver `package.json`).

## Contato

Repositório: https://github.com/lacort/study-hub-api

