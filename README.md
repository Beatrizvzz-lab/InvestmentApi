# API para Simulação de Investimentos

🚀 **Objetivo**: Esta API permite que usuários testem diferentes estratégias de investimento e visualizem projeções de rendimento com base em dados reais/históricos. A plataforma simula investimentos em diversos ativos como renda fixa, ações e criptomoedas, proporcionando uma visão clara do potencial de crescimento de suas estratégias.

## Status do Projeto

🚧 **Projeto em andamento**: Ainda estamos desenvolvendo e aprimorando as funcionalidades da API. Algumas features podem não estar completas ou podem passar por modificações futuras.
## Funcionalidades

- **Cadastro e Login de Usuário**: Usuários podem se cadastrar e fazer login com autenticação segura utilizando JWT (JSON Web Tokens) e **bcrypt** para garantir a segurança das senhas.
- **Simulação de Investimentos**: Permite aos usuários simular investimentos em diferentes tipos de ativos, como **renda fixa**, **ações** e **criptomoedas**.
- **Cálculo de Rendimento Futuro**: A API realiza o cálculo do rendimento futuro com base nas taxas de juros e no tempo de investimento informado pelo usuário.
- **Dashboard com Gráficos Dinâmicos**: O sistema gera gráficos que mostram a projeção de crescimento dos investimentos ao longo do tempo.
- **Integração com APIs Financeiras**: A API se integra com fontes externas como **Alpha Vantage** e **Yahoo Finance** para obter dados financeiros atualizados sobre ações, criptomoedas, e outros ativos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para construção da API RESTful.
- **Prisma**: ORM para interagir com o banco de dados **PostgreSQL**.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações de usuários, investimentos e dados financeiros.
- **JWT (JSON Web Tokens)**: Para autenticação e segurança nas rotas da API.
- **bcrypt**: Para criptografar as senhas dos usuários.
- **Axios**: Para consumir APIs externas de dados financeiros.
- **Chart.js / D3.js**: Bibliotecas para gerar gráficos dinâmicos no frontend (se necessário).
  
