# Ícaro Services

Aplicação frontend em React para divulgação e contratação de planos de hospedagem de servidores de jogos. O projeto combina uma landing page institucional com catálogo de servidores, página de preços e fluxo de cadastro com validação de formulário.

## Sobre O Projeto

- Página inicial com apresentação do serviço, métricas e chamada para ação.
- Página de servidores com catálogo de jogos disponíveis para hospedagem.
- Página de preços com planos, recursos e perguntas frequentes.
- Página de cadastro para contratar um plano.
- Navegação feita com React Router.
- Conteúdo alimentado por mocks locais para facilitar desenvolvimento e testes.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router
- SCSS Modules
- Yup para validação do formulário de cadastro
- Vite Plugin SVGR
- ESLint

## Pré-Requisitos

- Node.js 24 ou superior.
- npm instalado junto com o Node.js.

## Instalação

1. Clone o repositório e entre na pasta do projeto.

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd frontend-self-server-gaming
    ```

2. Instale as dependências.

    ```bash
    npm install
    ```

## Como Executar

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite vai informar o endereço local da aplicação, normalmente em `http://localhost:5173`.

## Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versão de produção e executa a checagem de tipos.
- `npm run preview`: sobe uma prévia local do build gerado.
- `npm run lint`: executa a análise estática com ESLint.

## Estrutura Do Projeto

- `src/App.tsx`: define as rotas da aplicação.
- `src/layout`: layout base compartilhado entre as páginas.
- `src/pages/home`: página inicial com hero, vantagens e banner.
- `src/pages/services`: catálogo de servidores disponíveis.
- `src/pages/prices`: página de planos, preços e FAQ.
- `src/pages/register`: fluxo de cadastro com formulário e validação.
- `src/components`: componentes reutilizáveis da interface.
- `src/mocks`: dados simulados usados nas telas.

## Rotas Principais

- `/`: página inicial.
- `/servers`: página de servidores.
- `/prices`: página de preços.
- `/register`: página de cadastro.
- `*`: página de erro 404.

## Observações

O projeto usa estilos em SCSS Modules e dados mockados para manter o ambiente local simples e independente de backend. O formulário de cadastro também usa validação com Yup, o que ajuda a simular o fluxo de contratação antes da integração com uma API real.
