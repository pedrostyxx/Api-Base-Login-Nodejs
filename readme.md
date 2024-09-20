## Projeto de Autenticação com JWT e PostgreSQL

**Descrição**

  

Este projeto é uma API de autenticação desenvolvida em Node.js com Express, utilizando JWT (JSON Web Tokens) para autenticação e PostgreSQL como banco de dados. Ele oferece funcionalidades básicas como registro de novos usuários, login, logout e rotas protegidas que requerem um token JWT válido.

  

As senhas dos usuários são criptografadas usando bcrypt antes de serem armazenadas no banco de dados, garantindo uma maior segurança.

**Objetivo**

  

O principal objetivo deste projeto é fornecer uma base simples e eficiente para gerenciar autenticação em aplicações web. Ele pode ser facilmente integrado a sistemas maiores ou adaptado conforme as necessidades de um projeto.

**Funcionalidades**

  

Registro de Usuário: Cria novos usuários com senhas criptografadas.

Login: Retorna um token JWT para usuários autenticados.

Rota Protegida: Acesso a rotas restritas somente com um token JWT válido.

Logout: Invalida o token do lado do cliente.

 

**Requisitos**

  

Antes de iniciar, certifique-se de ter os seguintes itens instalados:

  

Node.js

PostgreSQL

npm ou yarn

  

Instalação

  

**Clone este repositório:**

  

   

  

    git clone https://github.com/pedrostyxx/Api-Base-Login-Nodejs.git

    cd Api-Base-Login-Nodejs

  

**Instale as dependências:**

  

   

  

    npm install

  

**Configure a conexão com o banco de dados PostgreSQL em src/config/db.js:**

  

  

    const pool = new Pool({
    
    user: 'seu_usuario',
    
    host: 'localhost',
    
    database: 'seu_banco',
    
    password: 'sua_senha',
    
    port: 5432,
    
    });

  

**Crie a tabela de usuários no PostgreSQL:**

  



  

    CREATE TABLE users (
    
    id SERIAL PRIMARY KEY,
    
    username VARCHAR(50) UNIQUE NOT NULL,
    
    password VARCHAR(255) NOT NULL
    
    );

  

**Inicie o servidor:**

  


  

    npm start

  

Acesse as rotas na URL: http://localhost:3000

  

## Endpoints

**Registro de Usuário**

  

    POST /auth/register

**Exemplo de Corpo da Requisição (JSON):**

  

  
    
    {
    
    "username": "novo_usuario",
    
    "password": "senha123"
    
    }

  

**Login de Usuário**

  

    POST /auth/login

**Exemplo de Corpo da Requisição (JSON):**

  


  

    {
    
    "username": "novo_usuario",
    
    "password": "senha123"
    
    }

  

**Rota Protegida**

  

    GET /user/me

*Requer o header x-access-token com o token JWT obtido no login.*

  

**Logout de Usuário**

  

    POST /auth/logout

  

## Exemplo de Criação de Novas Rotas

  

Você pode criar novas rotas protegidas de forma simples. Aqui está um exemplo de como adicionar uma rota protegida para retornar informações de um cliente:

  

No arquivo **routes/userRoutes.js**, adicione uma nova rota:

  

  

    router.get('/clientes', verifyToken, (req, res) => {
    
    const clientes = [{ id: 1, nome: 'Cliente 1' }, { id: 2, nome: 'Cliente 2' }];
    
    res.json(clientes);
    
    });

  

Teste a nova rota enviando uma requisição GET para /user/clientes com o token JWT no header.

  

## Arquitetura do Projeto

  

O projeto segue uma arquitetura em camadas, o que facilita a manutenção e escalabilidade do código. A separação entre controladores (controllers), modelos (models), rotas (routes) e middlewares melhora a organização e permite que novas funcionalidades sejam adicionadas de forma modular.

**Estrutura de Pastas**


 ![enter image description here](https://i.ibb.co/TgmG3Mx/image.png)


**Prós da Arquitetura**

  

Modularidade: Cada parte do sistema é separada e pode ser trabalhada de forma independente.

Facilidade de Escalabilidade: Novas funcionalidades podem ser adicionadas facilmente sem afetar o restante do sistema.

Segurança: As senhas são armazenadas de forma criptografada e o JWT oferece uma maneira segura de gerenciar a autenticação.

  

**Contras da Arquitetura**

  

Complexidade inicial: Para projetos muito pequenos, a arquitetura pode parecer excessivamente complexa.

Curva de aprendizado: Para quem está iniciando com Express, pode demorar um pouco para se acostumar com a separação de camadas.

  

**Contribuições**

  

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.
