# ServerRest E2E Automation

Framework profissional de automação de testes E2E e API utilizando Cypress.

O projeto foi estruturado com foco em:

* Escalabilidade
* Reutilização de código
* Separação de responsabilidades
* Facilidade de manutenção
* Execução local e CI/CD
* Testes frontend e API no mesmo framework

---

# Objetivos do Projeto

Este framework foi criado para validar:

* Fluxos frontend (E2E)
* APIs REST
* Integrações frontend + backend
* Fluxos completos de usuário
* Regressão automatizada

O projeto utiliza arquitetura em camadas para reduzir acoplamento e facilitar evolução da suíte.

---

# Arquitetura Utilizada

## Arquitetura em Camadas (Layered Architecture)

O framework foi dividido em responsabilidades específicas.

## Estrutura

```text
cypress/
│
├── e2e/
│   ├── frontend/
│   └── api/
│
├── frontend/
│   ├── actions/
│   ├── assertions/
│   ├── intercepts/
│   ├── pages/
│   └── selectors/
│
├── api/
│   ├── services/
│   └── assertions/
│
├── fixtures/
│   ├── frontend/
│   └── api/
│
├── shared/
│   └── utils/
│
└── support/
```

---

# Explicação da Arquitetura

## e2e/

Contém apenas os testes.

Nenhuma regra de negócio ou seletor fica diretamente dentro das specs.

Responsabilidade:

* Fluxo do teste
* Orquestração das ações
* Leitura do cenário

---

## frontend/pages

Responsável por mapear elementos da interface.

Exemplo:

* Inputs
* Botões
* Tabelas
* Labels

Objetivo:
Centralizar seletores.

Se um seletor mudar, a alteração acontece em apenas um local.

---

## frontend/actions

Responsável pelas ações realizadas na tela.

Exemplo:

* Login
* Cadastro
* Adicionar produto ao carrinho

Objetivo:

Evitar duplicação de código e aumentar reutilização.

---

## frontend/assertions

Responsável pelas validações frontend.

Exemplo:

* Mensagens
* Redirecionamentos
* Estados visuais
* Quantidade de itens

Objetivo:

Centralizar validações.

---

## frontend/intercepts

Responsável pelos intercepts de rede.

Exemplo:

* Interceptar GET /produtos
* Validar status de APIs utilizadas pelo frontend
* Esperar carregamentos

Objetivo:

Aumentar estabilidade e reduzir flakiness.

---

## api/services

Responsável pela comunicação HTTP.

Exemplo:

* GET /usuarios
* POST /usuarios
* DELETE /usuarios

Objetivo:

Separar requisições da lógica dos testes.

---

## api/assertions

Responsável pelas validações de APIs.

Exemplo:

* Status code
* Contrato
* Campos obrigatórios
* Estrutura de resposta

Objetivo:

Padronizar validações.

---

## shared/utils

Responsável por componentes reutilizáveis.

Exemplo:

* Factories
* Helpers
* Builders
* Geradores de massa

Objetivo:

Reutilização entre frontend e API.

---

# Por que utilizamos esse modelo?

Esse modelo foi escolhido porque:

* Facilita manutenção
* Reduz duplicação de código
* Permite crescimento da suíte
* Facilita onboarding
* Melhora legibilidade
* Facilita debugging
* Permite reutilização entre frontend e API
* Aproxima o projeto de frameworks enterprise

Sem separação em camadas, frameworks Cypress costumam ficar acoplados rapidamente.

---

# Tecnologias Utilizadas

## Linguagem

* JavaScript

## Framework de testes

* Cypress

## Relatórios

* Allure Report

## Gerenciamento de ambiente

* dotenv
* cross-env

## Integração contínua

* GitHub Actions

## Gerenciador de pacotes

* npm

---

# Funcionalidades Implementadas

## Frontend

* Login
* Cadastro de usuário
* Carrinho
* Sessões reutilizáveis
* Intercepts
* Assertions customizadas
* Retry inteligente

## API

* Cadastro de usuário
* Busca de usuário
* Busca por ID
* Exclusão de usuário
* Busca de produtos
* Busca de produto por ID

---

# Recursos Avançados

## Sessions

Utilização de `cy.session()` para reaproveitamento de login.

Benefícios:

* Maior velocidade
* Menor consumo de execução
* Menor repetição de autenticação

---

## Retry Inteligente

Configuração de retries para reduzir flakiness.

---

## Intercepts

Uso de intercepts para:

* Esperar chamadas críticas
* Validar APIs consumidas pelo frontend
* Aumentar estabilidade dos testes

---

## Massa Dinâmica

Criação dinâmica de usuários.

Benefícios:

* Evita conflito de massa
* Evita poluição de ambiente
* Permite paralelismo

---

# Configuração do Projeto

## Pré-requisitos

Instalar:

* Node.js 22+
* npm
* Git
* Allure CLI

---

# Instalação

## Clonar projeto

```bash
git clone https://github.com/SEU-USUARIO/server_rest_e2e-automation.git
```

---

## Entrar na pasta

```bash
cd server_rest_e2e-automation
```

---

## Instalar dependências

```bash
npm install
```

---

# Arquivos de Ambiente

## .env.qa

```env
CYPRESS_baseUrl=https://front.serverest.dev
CYPRESS_apiUrl=https://serverest.dev
```

---

## .env.local

```env
CYPRESS_baseUrl=https://front.serverest.dev
CYPRESS_apiUrl=https://serverest.dev
```

---

# Como Executar

## Abrir Cypress

### Ambiente QA

```bash
npm run cy:open:qa
```

### Ambiente Local

```bash
npm run cy:open:local
```

---

# Execução Headless

## Ambiente QA

```bash
npm run cy:run:qa
```

## Ambiente Local

```bash
npm run cy:run:local
```

---

# Relatórios Allure

## Executar testes e gerar relatório

```bash
npm run test:allure:qa
```

---

# GitHub Actions

O projeto possui integração CI/CD utilizando GitHub Actions.

A pipeline executa:

* Instalação de dependências
* Execução dos testes
* Geração de relatório Allure
* Publicação de artefatos

---

# Branch Strategy

## Branches utilizadas

```text
main
Developer
feature/*
hotfix/*
```

---

# Padrões Utilizados

## Convenções

* Uma responsabilidade por camada
* Specs limpas
* Massa desacoplada
* Assertions reutilizáveis
* Services reutilizáveis
* Selectors centralizados
* Imports organizados

---

# Melhorias Futuras

Possíveis evoluções:

* Contract Testing
* Schema Validation
* Testes de Performance
* Integração com BrowserStack
* Testcontainers
* Dashboard de execução
* Execução paralela
* Docker
* Integração com Jira
