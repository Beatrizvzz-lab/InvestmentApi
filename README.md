# 💸 API para Simulação de Investimentos

## 🚀 Objetivo

Esta API permite que usuários testem diferentes estratégias de investimento e visualizem projeções de rendimento com base em dados reais/históricos. A plataforma simula investimentos em diversos ativos como **renda fixa, ações e criptomoedas**, proporcionando uma visão clara do potencial de crescimento dessas estratégias.

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento** – O projeto está em constante aprimoramento. Algumas funcionalidades ainda estão sendo implementadas e podem sofrer alterações nas próximas versões.

---

## ✨ Funcionalidades

- **Cadastro e Login de Usuário**  
  Autenticação segura com **JWT (JSON Web Token)** e **bcrypt** para criptografia de senhas.

- **Simulação de Investimentos**  
  Possibilidade de simular investimentos em ativos variados como renda fixa, ações e criptomoedas.

- **Cálculo de Rendimento Futuro**  
  Cálculos baseados nas taxas de juros e tempo de aplicação informados pelo usuário.

- **Dashboard com Gráficos Dinâmicos**  
  Geração de gráficos que mostram a projeção de crescimento dos investimentos ao longo do tempo.

- **Integração com APIs Financeiras**  
  Consulta a dados atualizados por meio de integrações com APIs como **Alpha Vantage** e **Yahoo Finance**.

---

## 🧪 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor.  
- **Express.js** – Framework para construção de API REST.  
- **Prisma ORM** – Interação com o banco de dados PostgreSQL.  
- **PostgreSQL** – Banco de dados relacional.  
- **JWT** – Autenticação segura via tokens.  
- **bcrypt** – Hash e verificação de senhas.  
- **Axios** – Requisições HTTP para APIs externas.  

---

## ⚙️ Setup do Projeto

### ✅ Pré-requisitos

- Node.js (v18+)
- PostgreSQL instalado e em execução
- npm ou yarn

### 📁 Estrutura de Pastas (sugestão)

```
/src
/controllers
/routes
/services
/middlewares
/prisma
/utils
.env
server.js
```


---

### 📄 Arquivo `.env.example`

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/investimentos_db"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

### Instalação
- Clone o repositório:
```
git clone https://github.com/beatrizvzz-lab/InvestimentApi.git
cd InvestimentApi
```
- Instale as dependências:
```
npm install
# ou
yarn install
```
- Configure as variáveis de ambiente;
- Execute as migrações do banco:
```
npx prisma migrate dev
```
- Inicie o servidor:
```
npm run dev
# ou
yarn dev
```
### ⚖️ Decisões Técnicas

- Prisma ORM escolhido pela produtividade, tipagem e integração com TypeScript.
- JWT + bcrypt para segurança robusta na autenticação.
- Axios para comunicação eficiente com APIs externas.
- Estrutura modular para facilitar manutenção, testes e escalabilidade futura.
- Uso de .env para variáveis sensíveis e configuração de ambiente.

### 📈 Melhorias Futuras

- 🖥️ Desenvolvimento de um frontend responsivo com dashboard interativo para visualização das simulações.
- 📊 Integração de gráficos dinâmicos utilizando Chart.js, D3.js ou outras bibliotecas para exibir projeções financeiras de forma visual e intuitiva.
- 💾 Histórico de simulações por usuário, permitindo acompanhar a evolução e comparar diferentes estratégias.
- 🔍 Filtros e personalizações avançadas nas simulações (tipo de ativo, risco, período, aporte mensal, etc).
- 📱 Adaptação mobile-first, possibilitando o uso em smartphones e tablets.
- 🧪 Implementação de testes automatizados (unitários e de integração) para maior confiabilidade.
