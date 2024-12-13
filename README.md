# Gerenciador de Tarefas

Este é um projeto de Gerenciador de Tarefas (ToDo List), desenvolvido para a disciplina de Desenvolvimento de Aplicações Orientadas a Componentes. Ele utiliza React, React Router e Tailwind CSS, com o backend simulado pelo JSON Server para realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) com os dados da API.

## Requisitos e Layout

Os requisitos da atividade e um exemplo de layout da aplicação estão disponíveis no Figma:
https://www.figma.com/design/J9sGAfy1vzwWhTRJiqqdSY/Untitled?node-id=0-1&node-type=canvas&t=4dtx6e8timPHGvx3-0

## Funcionalidades

- **Página Inicial**:
  - Exibe uma visão geral do sistema com botões para navegar para diferentes funcionalidades.

- **Cadastro de Tarefas**:
  - Formulário para criar novas tarefas, incluindo título, descrição, categoria, prioridade e status.

- **Detalhes da Tarefa**:
  - Exibe informações detalhadas de uma tarefa específica.

- **Edição de Tarefas**:
  - Permite a edição das tarefas cadastradas.

- **Listagem de Tarefas**:
  - Exibe todas as tarefas cadastradas com opções para visualizar, editar e excluir.

- **Página Sobre**:
  - Informações sobre o projeto e seus recursos.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - React Router DOM
  - Styled Components
  - Tailwind CSS

- **Backend**:
  - Simulação de uma API utilizando JSON Server

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- Node.js
- NPM ou Yarn
- JSON Server (para simular a API)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd gerenciador-tarefas
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o JSON Server:
   ```bash
   npm run server
   ```
   Certifique-se de ter um arquivo `db.json` configurado com o seguinte formato:
   ```json
   {
     "tasks": [
       {
         "id": 1,
         "titulo": "Exemplo de Tarefa",
         "descricao": "Descrição da tarefa",
         "prioridade": "Alta",
         "status": "A fazer",
         "categoria": "Trabalho"
       }
     ]
   }
   ```

5. Inicie o projeto React:
   ```bash
   npm start
   ```

## Estrutura do Projeto

- **`App.js`**:
  Configuração principal do React Router DOM para gerenciar as rotas da aplicação.

- **`HomePage.jsx`**:
  Página inicial com navegação para diferentes funcionalidades.

- **`SobrePage.jsx`**:
  Página com informações sobre o projeto.

- **`ProdutoDetalhePage.jsx`**:
  Página que exibe os detalhes de uma tarefa específica.

- **`produtoCadastrarPage.jsx`**:
  Página para cadastro de novas tarefas.

- **`ProdutoPage.jsx`**:
  Página que lista todas as tarefas com opções de edição, visualização e exclusão.

- **`ProdutoEditarPage.jsx`**:
  Página para editar as informações de uma tarefa existente.

## Rotas

- `/` - Página inicial
- `/sobre` - Página sobre o projeto
- `/produtos` - Listagem de tarefas
- `/produtos/:id` - Detalhes de uma tarefa específica
- `/produtos/cadastrar` - Cadastro de uma nova tarefa
- `/editar/:id` - Edição de uma tarefa específica

