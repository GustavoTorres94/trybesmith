<h1 align="center"> TrybeSmith :hammer: </h1>

<div align="center"> 
  
  ![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

</div>

<div align="center">
  <h3>Descrição</h3>
  <p>
    Uma aplicação Back-End que tem como objetivo de gestão de uma loja, com gestão e verficação de Login, Procura e inserção de produtos e criação de Pedidos.<br>
    A aplicação possui poucas funcionalidades no momento, criação e pesquisa. Pretendo dar continuidade para completar o CRUD.<br>
    A arquitetura de software escolhida para essa aplicação foi o Model Services Controller (MSC).<br>
    Foi um prohjeto da Trybe, desenvolvido por mim.
  </p>
</div>

## Índice

- [Como Usar](#como-usar)
  
- [Funcionalidades](#funcionalidades)
  
- [Tecnologias](#tecnologias)

### Como Usar

    
<p>
  <ol>
    <li>
      Clone este repositório.
    </li>
    <li>
      Entre no diretório criado.
    </li>
    <li>
      Intale as dependências da aplicação.
      
    npm install
      
            
  </li>
  <li>
    Utilize o seguinte comando para "subir" os containers do Docker

    docker compose up -d --build
        
  </li>
  <li>
    Utilize o script para iniciar o database.

    npm run db:reset
    
  </li>
  <li>
    Utilize o script de desnvolvimento para rodar a aplicação ou o de start para inicializar a aplicação

    npm run dev
    ou
    npm start
    
  </li>
  <li>
    Utlize um software de auxílio, insomnia ou semelhante, ou uma extensão do vscode, thunderclient ou semelhante, para realizar as requisições para os endpoints. Projeto clonado podes fazer requisições para

      localhost:3001/{endpoint}
    
  </li>
  </ol>
</p>

### Funcionalidades

Endpoints:<br>
/login - { post }<br>
/orders = { get, post }<br> 
/products - { get, post }<br>
Testes

### /login

Sistema de Autenticação com JWT e Bcrypt
Este endpoint apresenta uma implementação básica de um sistema de autenticação usando JSON Web Tokens (JWT) para gerenciar a autenticação de usuários e a criptografia de senhas utilizando a biblioteca bcryptjs.<br>

Funcionalidades Principais
<ol>
  <li>Autenticação de Usuários { Post } </li>
  <ul>
    <li>
      A função validateLogin é responsável por validar o login de usuários com base em seus nomes de usuário e senhas.
    </li>
    <li>
      Ela verifica se os campos de nome de usuário e senha são fornecidos e correspondem aos registros do banco de dados.
    </li>
    <li>
      Se a autenticação for bem-sucedida, a função retorna um token JWT para ser usado em requisições subsequentes como forma de autenticação.
    </li>
    <li>
      Exemplo de corpo da Requisição:
      
      {
        "username": "string",
        "password": "string"
      }
      
    
</li>
  </ul>
  <li>Geração de Tokens JWT</li>
  <ul>
    <li>
      A função payloadToken gera um token JWT com base nas informações do usuário autenticado.
    </li>
    <li>
      Este token contém informações específicas do usuário, como ID e nome de usuário, e é assinado com uma chave secreta definida no ambiente (JWT_SECRET) ou, caso não definida, usa uma chave padrão.
    </li>
  </ul>
</ol>

### /orders

Este endpoint apresenta funções para gerenciar pedidos e produtos no sistema de e-commerce da Trybesmith, utilizando Sequelize como ORM para interação com o banco de dados(MySQL).

Funcionalidades Principais
<ol>
  <li>Obter Todos os Pedidos { Get }</li>
  <ul>
    <li>
      A função validateGetAllOrders é responsável por buscar todos os pedidos no banco de dados.
    </li>
    <li>
      Ela retorna uma lista de pedidos, incluindo os IDs dos produtos associados a cada pedido.
    </li>
  </ul>
  <li>Criar um Novo Pedido { Post } </li>
  <ul>
    <li>
      A função validateCreateOrder permite criar um novo pedido associado a um usuário e a uma lista de produtos.
    </li>
    <li>
      Antes de criar o pedido, ela valida se o usuário tem permissão para realizar a operação.
    </li>
    <li>
      Após criar o pedido, ela associa os produtos ao pedido no banco de dados.
    </li>
    <li>
      Exemplo de corpo da Requisição em JSON:

      [
        {
          "id": 1,
          "userId": 2,
          "productIds": [1, 2]
        },
        {
          "id": 2,
          "userId": 1,
          "productIds": [3, 4]
        }
      ]
    
</li>
  </ul>
</ol>

## /products

Este endpoint oferece funcionalidades para o gerenciamento de produtos, utilizando Sequelize como ORM para interagir com o banco de dados(MySQL).

Funcionalidades Principais
<ol>
  <li>Inserir um Novo Produto { Post }
</li>
  <ul>
    <li>
      A função validateInsertProduct permite inserir um novo produto no banco de dados com base nas informações fornecidas.
    </li>
    <li>
      Ela recebe um objeto ProductxablauType contendo o nome (name), preço (price) e ID do pedido (orderId) do produto a ser inserido.
    </li>
    <li>
      Após a inserção bem-sucedida, a função retorna os dados do produto inserido, incluindo o ID gerado no banco de dados.
    </li>
    <li>
      Exemplo de corpo da Requisição

      {
        "name": "Martelo de Thor",
        "price": "30 peças de ouro",
        "orderId": 4
      }
      
</li>
  </ul>
  <li>Obter Todos os Produtos { Get }
</li>
  <ul>
    <li>
      A função validateGetAllProducts busca todos os produtos existentes no banco de dados.
    </li>
    <li>
      Ela retorna uma lista de objetos Product, contendo os dados de todos os produtos encontrados no banco de dados.
    </li>
  </ul>
</ol>

### Testes

A aplicação foi testada utilizando o Jest, Mocha e Chai. Os testes são unitários e estão no diretório de testes.<br>
Os comandos para testar a aplicação são os seguintes:

    npm run test:local
    npm run test:coverage

### Tecnologias

Neste projeto utilizei as seguintes ferramentas:
<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" />
  <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
</div>



<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
