# Frontend de Gerenciamento de Tarefas

Uma Single-Page Application (SPA) moderna, robusta e responsiva para o gerenciamento de tarefas, construída com **React 19**, **TypeScript** e **Vite**.

Essa aplicação conta com funcionalidades de UI avançadas, incluindo quadros Kanban interativos (arrastar e soltar), fluxogramas baseados em nós (nodes) e animações fluidas, proporcionando uma experiência de usuário premium.

## ✨ Funcionalidades

- **Stack Moderna**: React 19 + TypeScript + Vite para um desenvolvimento rápido e builds otimizados.
- **Roteamento Robusto**: Roteamento no lado do cliente com React Router v7.
- **Visualizações Avançadas de Tarefas**:
  - **Quadros Kanban**: Funcionalidade fluida de arrastar e soltar (drag-and-drop) via `@dnd-kit`.
  - **Fluxos de Trabalho (Workflows)**: Componentes de UI em formato de nós construídos com `@xyflow/react`.
- **Gerenciamento de Estado**: Sistema de estado global leve e rápido utilizando o `zustand`.
- **Formulários e Validação**: Formulários com tipagem forte usando `react-hook-form` e validação de schema através do `zod`.
- **Interface Atraente**: Estilização com **Tailwind CSS v4** e componentes acessíveis do **shadcn/ui**.
- **Animações**: Transições de tela fluidas e microinterações com a biblioteca **Framer Motion**.
- **Suporte Docker**: Arquivos `Dockerfile` e `docker-compose.yml` prontos para rodar a aplicação em ambientes conteinerizados.

## 🛠️ Tecnologias Utilizadas

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Roteamento**: [React Router](https://reactrouter.com/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Estado Global**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/)
- **Gráficos e Nós (Workflows)**: [React Flow (@xyflow/react)](https://reactflow.dev/)
- **Ícones**: [Lucide React](https://lucide.dev/)

## 📂 Estrutura do Projeto

```
src/
├── assets/       # Arquivos estáticos (imagens, ícones globais, etc.)
├── components/   # Componentes de UI reutilizáveis (shadcn/ui, componentes customizados)
├── hooks/        # Hooks customizados do React
├── layout/       # Estruturas base de layout da aplicação (navbar, sidebar, etc.)
├── lib/          # Funções utilitárias e configurações gerais
├── mock/         # Dados simulados (mocks) para testes e desenvolvimento local
├── pages/        # Componentes de rota que representam as páginas da aplicação
├── providers/    # Provedores de contexto globais
├── schemas/      # Arquivos de validação do Zod
└── store/        # Arquivos de estado do Zustand
```

## 🚀 Como Iniciar (Getting Started)

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
Como alternativa, você pode rodar o projeto utilizando o [Docker](https://www.docker.com/).

### Desenvolvimento Local

1. Clone o repositório e navegue até a pasta do projeto:
   ```bash
   cd tasks-management-front-end
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Copie o arquivo `.env.example` para `.env` e preencha com os valores necessários.
   ```bash
   cp .env.example .env
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`.

### Ambiente com Docker

Se preferir usar o Docker:

```bash
# Constrói a imagem e inicia o container em segundo plano (detached mode)
docker-compose up -d --build
```

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento do Vite.
- `npm run build` - Compila o TypeScript e constrói a aplicação para produção.
- `npm run preview` - Inicia um servidor web local estático para pré-visualizar o build de produção.
- `npm run lint` - Executa o ESLint para identificar e relatar padrões de erros no código TypeScript.

## 🚢 Deploy (Implantação)

Este projeto inclui um arquivo `vercel.json` e está totalmente otimizado para deploy na Vercel, mas também pode ser hospedado em qualquer serviço de arquivos estáticos que suporte builds Node.js.
