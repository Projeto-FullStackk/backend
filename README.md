<h1 align="center"> Motors Shop API</h1>

<div align="center">
  
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=fff) 	![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 

</div>

<p align="center">

  ![image](https://github.com/Projeto-FullStackk/frontend/assets/110180304/0928456f-4653-4c1a-b511-d77711cdcfe5)

</p>


<h2>Índice</h2>

1. [ Sobre ](#sobre)
2. [ Tecnologias](#techs)
3. [ Instalação ](#install)
4. [ Desenvolvedores ](#devs)
5. [ Termos de uso ](#termos)

<a name="sobre"></a>

## 1. Sobre
Este projeto foi gerado com NestJS.

Esta é uma API de venda de carros construído com NestJS. Ela oferece funcionalidades avançadas de CRUD para qualquer e-commerce com foco em negociações de carros nacionais e importados. 

A API possui autenticação de usuário e permite que os usuários gerenciem seus anúncios de carros. Há uma diferenciação entre usuários comuns e usuários vendedores, com recursos adicionais disponíveis para vendedores. Os usuários podem deixar comentários e avaliações nos respectivos anúncios, isto é, se o usuário estiver logado e com token de autenticação.

### 1.1 Deploy da Aplicação para teste no Front-end

- <a name="MotorShop" href="https://motorshop-joaobuga35.vercel.app/" target="_blank">Motor Shop - Live</a>

<a name="techs"></a>

## 2. Tecnologias

- <a name="nest" href="https://docs.nestjs.com" target="_blank">NestJS</a>
- <a name="postgres" href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>

<a name="install"></a>
## 3. Instalação e uso

### 3.1 Pré-Requisitos:
  <h4>1º Passo</h4>
  <h5>Antes de começar, certifique-se de ter instalado o Node.js em sua máquina.</h3>
  <p>Faça um fork deste repositório, depois clone o fork em sua máquina.</p>

  <h4>2º passo</h4>
  Variáveis de ambiente:
    Crie um arquivo .env e complete com suas informações conforme esta no .env.example.

  <h4>3º Passo - Configurando o Backend</h4>
  - Rode os seguintes comandos: 
  
  ```bash
  #instala todas as dependências necessárias
  $ npm install
    
  $ #migrate
  $ npx prisma migrate dev
  #generate
  $ npx prisma generate
    
  # development
  $ npm run start
    
  # watch mode
  $ npm run start:dev
    
  # production mode
  $ npm run start:prod
  ```
  <h4>4º Passo - Testando o Backend</h4>
  1. Acesse a documentação completa em: https://motor-shop-m6.onrender.com/api <br>
  2. Na raiz do projeto há um arquivo chamado "workspace_insomnia" que pode ser importado no insomnia para serem efetuados testes de rota, olhe a documentação e execute as rotas .

## 4. Ambiente de desenvolvimento FRONT-END
  <h4>1º Passo</h4>
  <p>Acesse o seguinte repositório: https://github.com/Projeto-FullStackk/frontend </p>
  <p>Siga as instruções do README para poder testar e contribuir com o projeto.</p>

## 5. Deselvolvedores

- <img src="https://github.com/gyo-almeida.png" width="40" height="40" style="border-radius: 20px;"> <a name="Gyovanna" href="https://github.com/gyo-almeida" target="_blank">Gyovanna Almeida</a>
- <img src="https://github.com/joaobuga35.png" width="40" height="40" style="border-radius: 20px;"> <a name="Joao" href="https://github.com/joaobuga35" target="_blank">João Bugati</a>
- <img src="https://github.com/kellygalliani.png" width="40" height="40" style="border-radius: 20px"> <a name="kelly" href="https://github.com/kellygalliani" target="_blank">Kelly Cristina</a>
- <img src="https://github.com/LuanFlorencioo.png" width="40" height="40" style="border-radius: 20px;"> <a name="luan" href="https://github.com/LuanFlorencioo" target="_blank">Luan Florêncio</a>
- <img src="https://github.com/milenarodarte.png" width="40" height="40" style="border-radius: 20px;"> <a name="milena" href="https://github.com/milenarodarte" target="_blank">Milena Rodarte</a>

<a name="termos"></a>

## 6. Termos de uso

Este é um projeto Open Source para fins educacionais e não comerciais, **Tipo de licença** - <a name="mit" href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>
<a name="devs"></a>
